import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/Reveal';
import MagneticButton from '@/components/MagneticButton';
import { skillCategories } from '@/data/portfolio';

export default function Skills() {
  const [active, setActive] = useState(skillCategories[0].id);
  const current = skillCategories.find((c) => c.id === active) ?? skillCategories[0];

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
          [ 03 / 06 — skills ]
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] tracking-tightest text-ink-50 max-w-4xl"
        >
          The tools, end to end.
        </motion.h1>
        <Reveal delay={0.2}>
          <p className="mt-8 text-lg text-ink-200 max-w-prose leading-relaxed">
            Every layer of a system, with the technologies I actually use to
            build them. No progress bars — the work is the proof.
          </p>
        </Reveal>
      </section>

      {/* Tabs */}
      <section className="mt-16 md:mt-20">
        <div className="flex flex-wrap gap-2 border-b border-ink-700 pb-px">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`relative flex items-center gap-2 px-4 py-3 text-sm transition-colors duration-300 ${
                active === cat.id ? 'text-white' : 'text-ink-300 hover:text-ink-100'
              }`}
            >
              <cat.icon size={15} />
              {cat.label}
              {active === cat.id && (
                <motion.span
                  layoutId="skill-tab"
                  className="absolute -bottom-px left-0 right-0 h-px bg-moss-400"
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="mt-12 min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-ink-300 mb-10 max-w-prose">{current.blurb}</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-700 border border-ink-700 rounded-2xl overflow-hidden">
                {current.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="group bg-ink-900 p-6 hover:bg-ink-850 transition-colors duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <h3 className="font-display text-xl text-ink-50 group-hover:text-white transition-colors">
                        {skill.name}
                      </h3>
                      <current.icon size={16} className="text-ink-500 group-hover:text-moss-400 transition-colors" />
                    </div>
                    <p className="text-sm text-ink-400 mt-2">{skill.note}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Full grid overview */}
      <section className="mt-24 md:mt-32">
        <Reveal>
          <p className="eyebrow mb-4">All at once</p>
          <h2 className="font-display text-3xl md:text-4xl text-ink-50 mb-12">
            The complete stack
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-700 border border-ink-700 rounded-2xl overflow-hidden">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 0.06}>
              <div className="bg-ink-900 p-7 h-full">
                <div className="flex items-center gap-2.5 mb-5">
                  <cat.icon size={17} className="text-moss-400" />
                  <h3 className="font-mono text-xs uppercase tracking-widest text-ink-200">
                    {cat.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span key={s.name} className="tag">
                      {s.name}
                    </span>
                  ))}
                </div>
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
              See these in action
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </MagneticButton>
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <Link to="/experience">
            <MagneticButton variant="ghost">Where I learned it</MagneticButton>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
