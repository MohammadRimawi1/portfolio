import { motion } from "framer-motion";
import { GraduationCap, Briefcase, MapPin, Award } from "lucide-react";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function About() {
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
          [ 02 / 06 — about ]
        </motion.p>
        <div className="grid md:grid-cols-12 gap-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-9 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] tracking-tightest text-ink-50"
          >
            One full-stack skill set —
            <br />
            <span className="text-ink-300">not half of one.</span>
          </motion.h1>
        </div>
      </section>

      {/* Narrative bio */}
      <section className="mt-20 grid md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-3">
          <Reveal>
            <p className="eyebrow">The short version</p>
          </Reveal>
        </div>
        <div className="md:col-span-9 max-w-prose">
          <Reveal delay={0.1}>
            <div className="space-y-6 text-lg text-ink-100 leading-relaxed">
              <p>
                I'm Mohammad Raed Hassan Rimawi, a Full-Stack Software Engineer
                based in Ramallah, Palestine. I work across the backend,
                frontend, databases, and the deployment side too — I'd rather
                understand the whole system than just one part of it.
              </p>
              <p>
                I'm in my fourth year of a Computer Science degree at Palestine
                Technical University — Khadoorie, with an 85.3 GPA. Alongside
                that, I did a 300+ hour backend engineering program at Exalt
                Technologies, working with Java, Spring Boot, microservices,
                Spring Cloud, and Docker on real service-based systems.
              </p>
              <p>
                I also did dedicated React and front-end training, so I'm not
                just backend-heavy. In practice that means I can design the
                database schema, write the API, containerize it, and build the
                screen that talks to it — and I like owning that whole path
                rather than just one piece of it.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stat cards */}
      <section className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-ink-700 border border-ink-700 rounded-2xl overflow-hidden">
        {[
          {
            icon: GraduationCap,
            value: "85.3",
            label: "GPA / 100",
            sub: "Year 4, CS",
          },
          {
            icon: Briefcase,
            value: "300+",
            label: "Training hours",
            sub: "Exalt Technologies",
          },
          {
            icon: Award,
            value: "5",
            label: "Projects built",
            sub: "Full-stack",
          },
          {
            icon: MapPin,
            value: "Ramallah",
            label: "Palestine",
            sub: "Remote-friendly",
          },
        ].map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <div className="bg-ink-900 p-6 md:p-8 h-full">
              <stat.icon size={18} className="text-moss-400 mb-4" />
              <p className="font-display text-3xl md:text-4xl text-ink-50">
                {stat.value}
              </p>
              <p className="text-sm text-ink-200 mt-1">{stat.label}</p>
              <p className="text-xs text-ink-400 mt-1 font-mono">{stat.sub}</p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Education + Training framed as one skill set */}
      <section className="mt-24 md:mt-32 grid md:grid-cols-2 gap-px bg-ink-700 border border-ink-700 rounded-2xl overflow-hidden">
        <Reveal>
          <div className="bg-ink-900 p-8 md:p-10 h-full">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap size={20} className="text-moss-400" />
              <p className="eyebrow">Education</p>
            </div>
            <h3 className="font-display text-2xl text-ink-50 mb-3">
              B.Sc. Computer Science
            </h3>
            <p className="text-sm text-ink-300 mb-4">
              Palestine Technical University — Khadoorie
            </p>
            <p className="text-ink-200 leading-relaxed">
              Year 4, GPA 85.3/100. Coursework in data structures, databases,
              operating systems, software engineering, and distributed systems —
              the theory that makes the engineering decisions hold up.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="bg-ink-900 p-8 md:p-10 h-full">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase size={20} className="text-rust-400" />
              <p className="eyebrow">Training</p>
            </div>
            <h3 className="font-display text-2xl text-ink-50 mb-3">
              Backend Engineering
            </h3>
            <p className="text-sm text-ink-300 mb-4">
              Exalt Technologies — 300+ hours
            </p>
            <p className="text-ink-200 leading-relaxed">
              Java, Spring Boot, microservices, Spring Cloud, and Docker. Built
              and deployed service-oriented systems end to end — from API design
              through containerized deployment. Paired with dedicated React and
              front-end training for the other half of the stack.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Philosophy quote */}
      <section className="mt-24 md:mt-32">
        <Reveal>
          <p className="font-display text-2xl md:text-4xl text-ink-100 leading-snug max-w-4xl">
            I like understanding how a system fits together end to end — not
            just the part I'm assigned. If I write the API, I want to know what
            breaks the UI that calls it, and what happens to the database when
            both are under load.
          </p>
          <p className="mt-6 font-mono text-xs text-ink-400 uppercase tracking-widest">
            Why full-stack
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mt-24 flex flex-col sm:flex-row items-center gap-4">
        <Reveal>
          <Link to="/projects">
            <MagneticButton variant="primary">
              See the work
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </MagneticButton>
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <Link to="/skills">
            <MagneticButton variant="ghost">
              Full skill breakdown
            </MagneticButton>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
