import { motion } from 'framer-motion';
import { Star } from './Icons';

const testimonials = [
  {
  name: 'Rohan Mehta',
  role: 'Founder, Nexvora Labs',
  avatar: 'RM',
  avatarBg: '#f43f5e',
  rating: 5,
  quote:
    'AnantaCode helped us rebuild our platform faster than expected. Their technical decisions improved both performance and scalability from day one.',
},
{
  name: 'Emily Carter',
  role: 'Product Lead, BrightScale',
  avatar: 'EC',
  avatarBg: '#6366f1',
  rating: 5,
  quote:
    'Working with AnantaCode felt like having a dedicated in-house engineering team. Communication was smooth, delivery was fast, and the final product exceeded expectations.',
},
{
  name: 'Arjun Patel',
  role: 'CTO, FinEdge Solutions',
  avatar: 'AP',
  avatarBg: '#10b981',
  rating: 5,
  quote:
    'Their attention to detail and focus on quality stood out immediately. Every feature was thoughtfully built with long-term growth and user experience in mind.',
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
  return (
    <section id="testimonials" style={{ background: '#09090b' }} className="min-h-screen flex flex-col justify-center py-10 relative overflow-hidden">
      {/* Background Glows (Left Blue, Right Red like image) */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ 
          background: `
            radial-gradient(circle at 10% 80%, rgba(79, 70, 229, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 90% 20%, rgba(225, 29, 72, 0.15) 0%, transparent 40%)
          `
        }} />

      <div className="container-main relative z-10 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#FF3B3B] font-bold text-xs tracking-[0.2em] uppercase mb-4">CLIENT STORIES</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight max-w-2xl mx-auto">
            Trusted by founders<br/>who demand results.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl transition-transform duration-300 hover:-translate-y-1 overflow-hidden p-[1px]"
            >
              {/* Static Border Layer */}
              <div className="absolute inset-0 bg-white/[0.08]" />

              {/* Animated Glowing Beam Layer */}
              <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 70%, #FF3B3B 100%)',
                }}
              />

              {/* Inner Card Layer */}
              <div className="relative h-full flex flex-col justify-between p-8 rounded-[15px] z-10"
                style={{ background: '#111113' }}
              >
                <div className="relative">
                  <div className="mb-6">
                    <Stars />
                  </div>
                  <blockquote className="text-[15px] italic mb-10 leading-relaxed text-gray-300 font-medium">
                    "{t.quote}"
                  </blockquote>
                </div>

                <div className="relative flex items-center gap-4 mt-auto">
                  <Avatar initials={t.avatar} bg={t.avatarBg} />
                  <div>
                    <p className="font-bold text-white text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
