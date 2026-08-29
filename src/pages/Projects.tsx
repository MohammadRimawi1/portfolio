import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/Reveal';
import MagneticButton from '@/components/MagneticButton';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/portfolio';

export default function Projects() {
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
          [ 04 / 06 — projects ]
        </motion.p>
        <div className="grid md:grid-cols-12 gap-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-9 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] tracking-tightest text-ink-50"
          >
            Five systems, built
            <br />
            <span className="text-ink-300">end to end.</span>
          </motion.h1>
        </div>
        <Reveal delay={0.2}>
          <p className="mt-8 text-lg text-ink-200 max-w-prose leading-relaxed">
            Each project below is a full working system — not a demo, not a
            snippet. The tech stack, the decisions, and the working code are all
            here.
          </p>
        </Reveal>
      </section>

      {/* Project cards */}
      <section className="mt-16 md:mt-20 space-y-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </section>

      {/* CTA */}
      <section className="mt-24 flex flex-col sm:flex-row items-center gap-4">
        <Reveal>
          <Link to="/contact">
            <MagneticButton variant="primary">
              Let's build something
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </MagneticButton>
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <Link to="/skills">
            <MagneticButton variant="ghost">What I work with</MagneticButton>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
