import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Github } from "lucide-react";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import { projects, contact } from "@/data/portfolio";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div className="container-edge pt-28 md:pt-36">
      {/* Hero */}
      <section className="relative">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-8"
        >
          Ramallah, Palestine — Full-Stack Software Engineer
        </motion.p>

        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-9">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] tracking-tightest text-ink-50"
            >
              Mohammad Raed
              <br />
              Hassan Rimawi
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="md:col-span-3 md:text-right"
          >
            <span className="font-mono text-xs text-ink-400">
              [ 01 / 06 — home ]
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-10 grid md:grid-cols-12 gap-8"
        >
          <p className="md:col-span-7 text-lg md:text-xl text-ink-100 leading-relaxed max-w-prose">
            I build complete systems — backend, frontend, database, and the
            deployment that gets it live. I'd rather work across the whole stack
            than specialize in just one piece of it.
          </p>
          <div className="md:col-span-5 flex flex-wrap items-center gap-3 md:justify-end">
            <Link to="/projects">
              <MagneticButton variant="primary">
                View Work
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </MagneticButton>
            </Link>
            <Link to="/contact">
              <MagneticButton variant="ghost">Contact Me</MagneticButton>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Marquee strip */}
      <Reveal className="mt-24 md:mt-32 border-y border-ink-700 py-5 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, dup) => (
            <div
              key={dup}
              className="flex gap-12 items-center font-mono text-sm text-ink-300"
            >
              {[
                "Java",
                "Spring Boot",
                "React",
                "Node.js",
                "PostgreSQL",
                "MongoDB",
                "Docker",
                "Microservices",
                "TypeScript",
                "Redis",
                "Kafka",
                "Express.js",
              ].map((t) => (
                <span key={t} className="flex items-center gap-12">
                  {t}
                  <span className="text-moss-400">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </Reveal>

      {/* Featured work */}
      <section className="mt-24 md:mt-32">
        <div className="flex items-end justify-between mb-12">
          <Reveal>
            <p className="eyebrow mb-3">Selected Work</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink-50">
              Featured projects
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/projects"
              className="link-underline text-sm text-ink-200 hover:text-white flex items-center gap-1.5"
            >
              All projects
              <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>

        <div className="space-y-px">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <Link
                to="/projects"
                className="group block border-t border-ink-700 py-8 transition-colors duration-300 hover:border-moss-400"
              >
                <div className="grid md:grid-cols-12 gap-6 items-baseline">
                  <div className="md:col-span-1 font-mono text-xs text-ink-400">
                    0{i + 1}
                  </div>
                  <div className="md:col-span-5">
                    <h3 className="font-display text-2xl md:text-3xl text-ink-50 group-hover:text-white transition-colors">
                      {project.name}
                    </h3>
                  </div>
                  <div className="md:col-span-4 text-sm text-ink-300">
                    {project.tagline}
                  </div>
                  <div className="md:col-span-2 flex md:justify-end">
                    <span className="font-mono text-xs text-ink-400">
                      {project.year}
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Approach band */}
      <section className="mt-28 md:mt-36 grid md:grid-cols-3 gap-px bg-ink-700 border border-ink-700 rounded-2xl overflow-hidden">
        {[
          {
            n: "01",
            t: "Backend first",
            d: "Spring Boot, microservices, message brokers. This is where I spend most of my time.",
          },
          {
            n: "02",
            t: "Frontend that works",
            d: "React and Tailwind, built to actually be usable, not just look good in a screenshot.",
          },
          {
            n: "03",
            t: "Shipping it",
            d: "Docker and the deployment pieces so the thing I built actually reaches production.",
          },
        ].map((item, i) => (
          <Reveal key={item.n} delay={i * 0.1}>
            <div className="bg-ink-900 p-8 h-full">
              <span className="font-mono text-xs text-moss-400">{item.n}</span>
              <h3 className="font-display text-xl mt-4 mb-3 text-ink-50">
                {item.t}
              </h3>
              <p className="text-sm text-ink-300 leading-relaxed">{item.d}</p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* CTA */}
      <section className="mt-28 md:mt-36 text-center">
        <Reveal>
          <p className="eyebrow mb-5">Have something to build?</p>
          <h2 className="font-display text-4xl md:text-6xl text-ink-50 max-w-3xl mx-auto leading-tight">
            Let's talk about what you're building.
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact">
              <MagneticButton variant="primary">
                Start a conversation
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </MagneticButton>
            </Link>
            <a
              href={contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MagneticButton variant="ghost">
                <Github size={16} />
                GitHub
              </MagneticButton>
            </a>
          </div>
        </Reveal>
      </section>

      <div className="mt-24 flex justify-center">
        <Link
          to="/about"
          className="text-ink-400 hover:text-moss-400 transition-colors"
          aria-label="Go to About"
        >
          <ArrowDown size={20} className="animate-bounce" />
        </Link>
      </div>
    </div>
  );
}
