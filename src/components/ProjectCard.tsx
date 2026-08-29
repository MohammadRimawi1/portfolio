import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";

const accentMap = {
  moss: {
    text: "text-moss-400",
    border: "hover:border-moss-400",
    dot: "bg-moss-400",
  },
  rust: {
    text: "text-rust-400",
    border: "hover:border-rust-400",
    dot: "bg-rust-400",
  },
  sand: {
    text: "text-sand-400",
    border: "hover:border-sand-400",
    dot: "bg-sand-400",
  },
};

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const accent = accentMap[project.accent];

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative border border-ink-700 ${accent.border} rounded-2xl bg-ink-900 p-7 md:p-10 transition-colors duration-400 will-change-transform`}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <span className={`h-2 w-2 rounded-full ${accent.dot}`} />
          <span className="font-mono text-xs text-ink-400">
            0{index + 1} / {project.year}
          </span>
        </div>
        <span className="font-mono text-xs text-ink-400">{project.role}</span>
      </div>

      <h3 className="font-display text-3xl md:text-4xl text-ink-50 mb-3 leading-tight">
        {project.name}
      </h3>
      <p className={`text-base mb-6 ${accent.text}`}>{project.tagline}</p>

      <p className="text-ink-200 leading-relaxed mb-6 max-w-prose">
        {project.summary}
      </p>

      {/* Details */}
      <ul className="space-y-3 mb-8">
        {project.details.map((detail, i) => (
          <li
            key={i}
            className="flex gap-3 text-sm text-ink-300 leading-relaxed"
          >
            <span
              className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${accent.dot}`}
            />
            {detail}
          </li>
        ))}
      </ul>

      {/* Impact */}
      <div className="border-l-2 border-ink-600 pl-4 mb-8">
        <p className="text-xs font-mono uppercase tracking-widest text-ink-400 mb-1.5">
          Why it matters
        </p>
        <p className="text-ink-100 text-sm leading-relaxed">{project.impact}</p>
      </div>

      {/* Stack */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.stack.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      {project.github && (
        <div className="flex items-center gap-4 pt-6 border-t border-ink-700">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex items-center gap-2 text-sm text-ink-100 hover:text-white transition-colors"
          >
            <Github
              size={16}
              className="text-ink-300 group-hover/link:text-moss-400 transition-colors"
            />
            <span className="link-underline">View on GitHub</span>
            <ArrowUpRight
              size={13}
              className="text-ink-500 group-hover/link:text-moss-400 transition-colors"
            />
          </a>
        </div>
      )}
    </motion.article>
  );
}
