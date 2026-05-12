import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Layers, ShieldCheck, Cpu } from './Icons';

/* Pure React animated counter — no extra deps */
function AnimatedNumber({ value, suffix, active }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!active) return;
    let current = 0;
    const step = Math.max(1, Math.floor(value / 80));
    const timer = setInterval(() => {
      current += step;
      if (current >= value) { setDisplay(value); clearInterval(timer); }
      else setDisplay(current);
    }, 20);
    return () => clearInterval(timer);
  }, [active, value]);
  return <>{display}{suffix}</>;
}

const cards = [
  {
    Icon: Zap,        title: 'Performance First',
    desc: 'Optimised bundles, lazy loading, and CDN-ready infrastructure for blazing fast apps.',
    metric: 98, suffix: '/100', metricLabel: 'Avg PageSpeed Score',
    bar: 98, color: '#FF3B3B',
    tags: ['Core Web Vitals', 'Lighthouse', 'CDN'],
  },
  {
    Icon: Layers,     title: 'Scalable Architecture',
    desc: 'Microservices, cloud-native design, and auto-scaling that grows with your user base.',
    metric: 100, suffix: 'k+', metricLabel: 'Concurrent Users Handled',
    bar: 92, color: '#FF6B35',
    tags: ['Microservices', 'Auto-scaling', 'K8s'],
  },
  {
    Icon: ShieldCheck, title: 'Secure Systems',
    desc: 'End-to-end encryption, OWASP compliance, and continuous vulnerability monitoring.',
    metric: 0, suffix: ' Breaches', metricLabel: 'Security Incidents (Ever)',
    bar: 100, color: '#22C55E',
    tags: ['OWASP', 'SSL/TLS', 'Pen Testing'],
  },
  {
    Icon: Cpu,        title: 'Modern Tech Stack',
    desc: 'The latest frameworks and cloud platforms so your product stays future-proof.',
    metric: 25, suffix: '+', metricLabel: 'Technologies Mastered',
    bar: 88, color: '#8B5CF6',
    tags: ['React', 'Next.js', 'AWS', 'Docker'],
  },
];

function Card({ card, index, inView }) {
  return (
    <motion.div
      className="bg-white border border-black/[0.07] rounded-2xl p-6 flex flex-col gap-4 shadow-card
                 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 cursor-default
                 relative overflow-hidden group"
      style={{ '--c': card.color }}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Top accent bar */}
      <div className="absolute top-0 inset-x-0 h-[3px] rounded-t-2xl opacity-70 group-hover:opacity-100 transition-opacity"
           style={{ background: `linear-gradient(90deg, ${card.color}, transparent)` }} />

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0
                     transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-8deg]"
          style={{ background: `${card.color}18`, border: `1px solid ${card.color}30` }}
        >
          <card.Icon size={20} style={{ color: card.color }} />
        </div>
        <div className="text-right min-w-0">
           <p className="text-xl md:text-2xl font-extrabold font-heading leading-none" style={{ color: card.color }}>
            <AnimatedNumber value={card.metric} suffix={card.suffix} active={inView} />
           </p>
          <p className="text-[11px] text-gray-400 font-medium mt-0.5 truncate max-w-[130px]">
            {card.metricLabel}
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="flex items-center gap-2">
        <div className="flex-1 h-1.5 bg-black/[0.06] rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: card.color }}
            initial={{ width: '0%' }}
            animate={inView ? { width: `${card.bar}%` } : { width: '0%' }}
            transition={{ duration: 1.4, delay: index * 0.1 + 0.3, ease: [0.4, 0, 0.2, 1] }}
          />
        </div>
        <span className="text-[11px] font-bold" style={{ color: card.color }}>{card.bar}%</span>
      </div>

      {/* Text */}
      <div>
        <h3 className="font-bold text-gray-900 text-base mb-1">{card.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {card.tags.map((t) => (
          <span key={t} className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                style={{ background: `${card.color}12`, color: card.color, border: `1px solid ${card.color}22` }}>
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const trackRef = useRef(null);
  const [dot, setDot] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const fn = () => {
      const w = el.offsetWidth;
      setDot(Math.round(el.scrollLeft / (w * 0.88)));
    };
    el.addEventListener('scroll', fn, { passive: true });
    return () => el.removeEventListener('scroll', fn);
  }, []);

  return (
    <section ref={ref} className="section bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="eyebrow">Why AnantaCode</p>
          <h2 className="section-title mb-3">Trusted by Startups. Built for Scale.</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Numbers don't lie — here's what sets us apart from every other agency.
          </p>
        </motion.div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => <Card key={c.title} card={c} index={i} inView={inView} />)}
        </div>

        {/* Mobile swipe carousel */}
        <div
          ref={trackRef}
          className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4
                     -mx-4 px-4 pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none' }}
        >
          {cards.map((c, i) => (
            <div key={c.title} className="flex-none w-[88vw] snap-start">
              <Card card={c} index={i} inView={inView} />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="md:hidden flex justify-center gap-2 mt-4">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const el = trackRef.current;
                if (el) el.scrollTo({ left: i * el.offsetWidth * 0.88, behavior: 'smooth' });
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === dot ? 'bg-red-primary scale-125' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
