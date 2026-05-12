import { motion } from 'framer-motion';
import { Star } from './Icons';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Founder, TechStartup India',
    avatar: 'RS',
    avatarBg: '#FF3B3B',
    rating: 5,
    featured: true,
    quote:
      'AnantaCode completely transformed our platform. The attention to detail, speed of delivery, and quality of code is unmatched. Our PageSpeed went from 54 to 97 after their optimization sprint.',
    company: 'TechStartup India',
    metric: '97',
    metricLabel: 'PageSpeed Score',
  },
  {
    name: 'Priya Mehta',
    role: 'CTO, FinFlow',
    avatar: 'PM',
    avatarBg: '#6366f1',
    rating: 5,
    featured: false,
    quote:
      'Delivered our entire backend API in 3 weeks. Rock-solid architecture that scaled to 50k users without breaking a sweat.',
    company: 'FinFlow',
  },
  {
    name: 'Arjun Kapoor',
    role: 'CEO, ShopMate',
    avatar: 'AK',
    avatarBg: '#0ea5e9',
    rating: 5,
    featured: false,
    quote:
      'The UI/UX work they did for us was stunning. Our conversion rate increased by 40% within the first month.',
    company: 'ShopMate',
  },
  {
    name: 'Sneha Verma',
    role: 'Product Lead, CloudBase',
    avatar: 'SV',
    avatarBg: '#10b981',
    rating: 5,
    featured: false,
    quote:
      'Best development partner we have ever worked with. Clear communication, on-time delivery, excellent support.',
    company: 'CloudBase',
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-1">
      {Array(count).fill(0).map((_, i) => (
        <Star key={i} size={13} color="#FF3B3B" fill="#FF3B3B" />
      ))}
    </div>
  );
}

function Avatar({ initials, bg }) {
  return (
    <div
      className="w-9 h-9 rounded-full flex items-center justify-center
                 text-white text-xs font-bold flex-shrink-0"
      style={{ background: bg }}
    >
      {initials}
    </div>
  );
}

export default function TestimonialsSection() {
  const featured = testimonials.find((t) => t.featured);
  const secondary = testimonials.filter((t) => !t.featured);

  return (
    /* Dark hero-matching background #0A0A0A, compact py-14 instead of full section */
    <section id="testimonials" style={{ background: '#0A0A0A' }} className="py-14 relative">
      {/* Subtle red glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,59,59,0.07) 0%, transparent 70%)' }} />

      <div className="container-main relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="eyebrow">Client Stories</p>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-3 leading-tight">
            Loved by Teams Worldwide
          </h2>
          <p className="text-white text-base max-w-lg mx-auto">
            Don't take our word for it — hear from the founders and teams we've worked with.
          </p>
        </motion.div>

        {/* Editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">

          {/* ── Featured card ── */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55 }}
              className="lg:col-span-3 relative rounded-2xl p-7 md:p-8
                         flex flex-col justify-between overflow-hidden"
              style={{ background: '#fef2f2ff', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {/* Top accent */}
              <div className="absolute top-0 inset-x-0 h-[2px] rounded-t-2xl"
                style={{ background: 'linear-gradient(90deg,#FF3B3B,#FF6B6B,transparent)' }} />

              {/* Big quote mark */}
              <div className="absolute top-4 right-6 text-[100px] leading-none font-serif
                              select-none pointer-events-none"
                style={{ color: 'rgba(255,59,59,0.06)' }}>
                "
              </div>

              <div className="relative">
                <Stars />
                <blockquote className="mt-5 text-black text-lg md:text-xl font-heading font-semibold
                                       leading-snug max-w-lg">
                  "{featured.quote}"
                </blockquote>
              </div>

              <div className="relative mt-7 flex items-end justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <Avatar initials={featured.avatar} bg={featured.avatarBg} />
                  <div>
                    <p className="font-bold text-black text-sm">{featured.name}</p>
                    <p className="text-black text-xs">{featured.role}</p>
                  </div>
                </div>
                {featured.metric && (
                  <div className="flex flex-col items-end">
                    <span className="text-2xl font-extrabold font-heading"
                      style={{ color: '#FF3B3B' }}>
                      {featured.metric}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">{featured.metricLabel}</span>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* ── Secondary cards ── */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {secondary.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl p-5 flex flex-col gap-3
                           hover:-translate-y-0.5 transition-all duration-300"
                style={{ background: '#fef2f2ff', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="flex items-center justify-between">
                  <Stars />
                  <span className="text-[11px] text-black font-medium">{t.company}</span>
                </div>
                <p className="text-black text-sm leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-2 pt-2"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <Avatar initials={t.avatar} bg={t.avatarBg} />
                  <div>
                    <p className="font-bold text-black text-xs">{t.name}</p>
                    <p className="text-black text-[11px]">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
