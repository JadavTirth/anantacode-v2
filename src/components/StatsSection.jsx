import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Cloud, Database, Layers, Shield, Search, Rocket, Zap, Sparkles, GitBranch } from './Icons';

const techs = [
  { label: 'React', Icon: Code2 },
  { label: 'Next.js', Icon: Layers },
  { label: 'Node.js', Icon: Rocket },
  { label: 'Docker', Icon: Cloud },
  { label: 'AWS', Icon: Database },
  { label: 'Kubernetes', Icon: Cloud },
  { label: 'MongoDB', Icon: Database },
  { label: 'TypeScript', Icon: Code2 },
  { label: 'GraphQL', Icon: Zap },
  { label: 'Tailwind', Icon: Search },
];

/* ── Simple animated counter ── */
function AnimatedNumber({ value, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = value / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { label: 'Projects Delivered', value: 20, suffix: '+' },
  { label: 'Technologies', value: 25, suffix: '+' },
  { label: 'Client Satisfaction', value: 99, suffix: '%' },
  { label: 'Support Availability', value: 24, suffix: '/7' },
];

export default function StatsSection() {
  return (
    <>
      {/* ── Tech Marquee Strip ── */}
      <section className="relative overflow-hidden py-5 bg-gray-100">
        {/* Subtle center glow */}
        <div className="text-center mb-4">
          <span className="text-[10px] font-black uppercase tracking-[0.3em]"
            style={{ color: '#FF3B3B' }}>
            ◆ &nbsp; Technologies We Work With &nbsp; ◆
          </span>
        </div>

        {/* Single scrolling row — white items */}
        <div className="relative flex overflow-hidden marquee-fade">
          <div className="flex gap-20 animate-marquee whitespace-nowrap pr-20">
            {[...techs, ...techs].map(({ label, Icon }, i) => (
              <div key={i}
                className="flex items-center gap-2.5 transition-colors duration-200 cursor-default"
                style={{ color: 'rgba(0,0,0,0.35)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#FF3B3B'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(0,0,0,0.35)'}
              >
                <Icon size={18} />
                <span className="font-semibold text-sm tracking-wide">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats grid ── */}
      <section className="py-16 bg-gray-100">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center px-4"
              >
                <div className="text-4xl font-extrabold font-heading mb-1"
                  style={{ color: '#FF3B3B' }}>
                  <AnimatedNumber value={s.value} suffix={s.suffix} />
                </div>
                <p className="text-gray-500 text-sm font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
