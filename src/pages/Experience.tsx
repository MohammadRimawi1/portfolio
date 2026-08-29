import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/Reveal';
import MagneticButton from '@/components/MagneticButton';
import { timeline, certifications } from '@/data/portfolio';

const kindIcon = {
  education: GraduationCap,
  training: Briefcase,
};

export default function Experience() {
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
          [ 05 / 06 — experience ]
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] tracking-tightest text-ink-50 max-w-4xl"
        >
          How it came together.
        </motion.h1>
        <Reveal delay={0.2}>
          <p className="mt-8 text-lg text-ink-200 max-w-prose leading-relaxed">
            Education and training, in order — the path from first CS class to
            shipping containerized microservices.
          </p>
        </Reveal>
      </section>

      {/* Timeline */}
      <section className="mt-20 md:mt-28">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-2 bottom-2 w-px bg-ink-700" />

          <div className="space-y-12 md:space-y-16">
            {timeline.map((entry, i) => {
              const Icon = kindIcon[entry.kind];
              return (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="relative pl-14 md:pl-20">
                    {/* Node */}
                    <div className="absolute left-0 md:left-4 top-0 flex h-9 w-9 items-center justify-center rounded-full border border-ink-600 bg-ink-900">
                      <Icon size={16} className={entry.kind === 'education' ? 'text-moss-400' : 'text-rust-400'} />
                    </div>

                    <div className="grid md:grid-cols-12 gap-4 md:gap-8">
                      <div className="md:col-span-3">
                        <p className="font-mono text-xs text-ink-400 uppercase tracking-widest">
                          {entry.period}
                        </p>
                      </div>
                      <div className="md:col-span-9">
                        <h3 className="font-display text-2xl md:text-3xl text-ink-50 mb-1.5">
                          {entry.title}
                        </h3>
                        <p className={`text-sm mb-4 ${entry.kind === 'education' ? 'text-moss-400' : 'text-rust-400'}`}>
                          {entry.org}
                        </p>
                        <p className="text-ink-200 leading-relaxed max-w-prose">
                          {entry.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="mt-24 md:mt-32">
        <Reveal>
          <div className="flex items-center gap-3 mb-10">
            <Award size={18} className="text-sand-400" />
            <p className="eyebrow">Certifications</p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-ink-50 mb-12">
            Earned along the way
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-px bg-ink-700 border border-ink-700 rounded-2xl overflow-hidden">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.1}>
              <div className="group bg-ink-900 p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-ink-600 group-hover:border-sand-400 transition-colors duration-300">
                    <Award size={20} className="text-sand-400" />
                  </div>
                  <span className="font-mono text-xs text-ink-400">{cert.year}</span>
                </div>
                <h3 className="font-display text-xl text-ink-50 mb-2 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-sm text-ink-300 mt-auto pt-4">
                  {cert.issuer}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 flex flex-col sm:flex-row items-center gap-4">
        <Reveal>
          <Link to="/projects">
            <MagneticButton variant="primary">
              See the projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </MagneticButton>
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <Link to="/contact">
            <MagneticButton variant="ghost">Get in touch</MagneticButton>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
