import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  Github,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { contact } from "@/data/portfolio";
import { supabase } from "@/lib/supabase";

type Status = "idle" | "loading" | "success" | "error";
type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.subject.trim()) next.subject = "Please add a subject.";
    if (!form.message.trim()) {
      next.message = "Please write a message.";
    } else if (form.message.trim().length < 10) {
      next.message = "Message should be at least 10 characters.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const { error } = await supabase.from("contact_messages").insert({
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      });
      if (error) throw error;
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const update = (field: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  return (
    <div className="container-edge pt-28 md:pt-36">
      {/* Header */}
      <section>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-8"
        >
          [ 06 / 06 — contact ]
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] tracking-tightest text-ink-50 max-w-4xl"
        >
          Let's build something.
        </motion.h1>
        <Reveal delay={0.2}>
          <p className="mt-8 text-lg text-ink-200 max-w-prose leading-relaxed">
            Have a project, a role, or something worth building? Send a message
            and I'll get back to you.
          </p>
        </Reveal>
      </section>

      <div className="mt-16 md:mt-20 grid lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Contact details */}
        <div className="lg:col-span-4">
          <Reveal>
            <p className="eyebrow mb-6">Direct lines</p>
            <ul className="space-y-6">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="group flex items-start gap-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-ink-600 group-hover:border-moss-400 transition-colors">
                    <Mail
                      size={16}
                      className="text-ink-300 group-hover:text-moss-400 transition-colors"
                    />
                  </span>
                  <span>
                    <span className="block text-xs font-mono uppercase tracking-widest text-ink-400 mb-1">
                      Email
                    </span>
                    <span className="link-underline text-ink-100 group-hover:text-white transition-colors">
                      {contact.email}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="group flex items-start gap-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-ink-600 group-hover:border-moss-400 transition-colors">
                    <Phone
                      size={16}
                      className="text-ink-300 group-hover:text-moss-400 transition-colors"
                    />
                  </span>
                  <span>
                    <span className="block text-xs font-mono uppercase tracking-widest text-ink-400 mb-1">
                      Phone
                    </span>
                    <span className="link-underline text-ink-100 group-hover:text-white transition-colors">
                      {contact.phone}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-ink-600 group-hover:border-moss-400 transition-colors">
                    <Github
                      size={16}
                      className="text-ink-300 group-hover:text-moss-400 transition-colors"
                    />
                  </span>
                  <span>
                    <span className="block text-xs font-mono uppercase tracking-widest text-ink-400 mb-1">
                      GitHub
                    </span>
                    <span className="link-underline text-ink-100 group-hover:text-white transition-colors">
                      {contact.github}
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        {/* Form */}
        <div className="lg:col-span-8">
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} noValidate className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="field-underline">
                  <input
                    type="text"
                    id="name"
                    placeholder=" "
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    aria-invalid={!!errors.name}
                  />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="field-underline">
                  <input
                    type="email"
                    id="email"
                    placeholder=" "
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    aria-invalid={!!errors.email}
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>

              <div className="field-underline">
                <input
                  type="text"
                  id="subject"
                  placeholder=" "
                  value={form.subject}
                  onChange={(e) => update("subject", e.target.value)}
                  aria-invalid={!!errors.subject}
                />
                <label htmlFor="subject">Subject</label>
              </div>

              <div className="field-underline">
                <textarea
                  id="message"
                  placeholder=" "
                  rows={5}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  aria-invalid={!!errors.message}
                />
                <label htmlFor="message">Message</label>
              </div>

              {/* Error messages */}
              <div className="space-y-2">
                {Object.values(errors).map((msg, i) => (
                  <p
                    key={i}
                    className="flex items-center gap-2 text-sm text-rust-400"
                  >
                    <AlertCircle size={14} />
                    {msg}
                  </p>
                ))}
              </div>

              {/* Status banner */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-2.5 rounded-lg border border-moss-600 bg-moss-600/10 px-4 py-3 text-sm text-moss-400"
                  >
                    <CheckCircle2 size={16} />
                    Message sent. I'll get back to you shortly.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-2.5 rounded-lg border border-rust-600 bg-rust-600/10 px-4 py-3 text-sm text-rust-400"
                  >
                    <AlertCircle size={16} />
                    Something went wrong. Please try again or email me directly.
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="group relative inline-flex items-center gap-2.5 rounded-full bg-moss-400 px-8 py-3.5 text-sm font-medium text-ink-950 transition-all duration-300 hover:bg-moss-500 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send message
                    <Send
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
