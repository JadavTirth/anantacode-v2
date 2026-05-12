import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Pen, Code, Rocket } from './Icons';

const steps = [
  {
    num: '01', Icon: Search, title: 'Discovery',
    desc: 'Understanding your business goals, target audience, technical requirements, and product vision in depth.',
    tags: ['Goal Setting', 'User Research', 'Scope'],
  },
  {
    num: '02', Icon: Pen, title: 'Planning',
    desc: 'Creating scalable architecture, wireframes, database design, and a detailed development roadmap.',
    tags: ['Architecture', 'Wireframes', 'Roadmap'],
  },
  {
    num: '03', Icon: Code, title: 'Development',
    desc: 'Building secure, scalable, and high-performance applications using the latest modern technologies.',
    tags: ['React', 'Node.js', 'Testing'],
  },
  {
    num: '04', Icon: Rocket, title: 'Deployment',
    desc: 'Production deployment with CI/CD pipelines, monitoring, performance optimisation, and auto-scaling.',
    tags: ['CI/CD', 'Monitoring', 'Scaling'],
  },
];

export default function ProcessSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="process" className="section bg-gray-100">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="eyebrow">How We Work</p>
          <h2 className="section-title mb-4">Our Development Process</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            A proven 4-step process that delivers results on time and on budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Step tabs */}
          <div className="flex flex-col gap-3">
            {steps.map((step, i) => (
              <button
                key={step.num}
                onClick={() => setActive(i)}
                className={`text-left flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 ${active === i
                  ? 'bg-white border-red-primary/30 shadow-card-hover'
                  : 'bg-gray-50 border-transparent hover:bg-white hover:border-gray-200 hover:shadow-card'
                  }`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${active === i ? 'bg-red-primary text-white' : 'bg-gray-100 text-gray-400'
                  }`}>
                  <step.Icon size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 mb-0.5">Step {step.num}</p>
                  <p className={`font-bold text-base transition-colors ${active === i ? 'text-gray-900' : 'text-gray-600'}`}>
                    {step.title}
                  </p>
                </div>
                {active === i && (
                  <div className="ml-auto w-2 h-2 rounded-full bg-red-primary" />
                )}
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="glass-card p-8 lg:sticky lg:top-24"
            >
              <p className="text-8xl font-extrabold font-heading text-red-primary/10 leading-none mb-4">
                {steps[active].num}
              </p>
              <div className="w-12 h-12 rounded-xl bg-red-primary/10 flex items-center justify-center mb-5">
                {(() => { const I = steps[active].Icon; return <I size={24} className="text-red-primary" />; })()}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{steps[active].title}</h3>
              <p className="text-gray-500 leading-relaxed mb-6">{steps[active].desc}</p>
              <div className="flex flex-wrap gap-2">
                {steps[active].tags.map((t) => (
                  <span key={t} className="tag-chip bg-red-primary/8 text-red-primary border-red-primary/20 text-xs px-3 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
