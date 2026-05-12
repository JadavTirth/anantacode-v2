import { motion } from 'framer-motion';
import { Layers, Cloud, Sparkles, Database, Shield, Phone } from './Icons';
import GlareHover from './GlareHover';

const services = [
  {
    title: 'Cyber Security', Icon: Shield,
    desc: 'Threat protection, OWASP compliance, and continuous vulnerability monitoring.',
    grad: 'from-amber-500/10 via-yellow-500/5 to-transparent',
    glow: 'rgba(245,158,11,0.15)',
    iconBg: '#f59e0b',
  },
  {
    title: 'Web Development', Icon: Layers,
    desc: 'Modern, scalable, high-performance web apps using React, Next.js & Node.js.',
    grad: 'from-blue-500/10 via-indigo-500/5 to-transparent',
    glow: 'rgba(99,102,241,0.15)',
    iconBg: '#6366f1',
  },
  {
    title: 'Cloud & DevOps', Icon: Cloud,
    desc: 'Automated pipelines, Docker orchestration, Kubernetes, and scalable hosting.',
    grad: 'from-sky-500/10 via-cyan-500/5 to-transparent',
    glow: 'rgba(14,165,233,0.15)',
    iconBg: '#0ea5e9',
  },
  {
    title: 'UI/UX Design', Icon: Sparkles,
    desc: 'Premium interfaces designed for performance, engagement, and delight.',
    grad: 'from-pink-500/10 via-rose-500/5 to-transparent',
    glow: 'rgba(236,72,153,0.15)',
    iconBg: '#ec4899',
  },
  {
    title: 'API Development', Icon: Database,
    desc: 'Secure, scalable REST & GraphQL APIs for modern applications.',
    grad: 'from-emerald-500/10 via-green-500/5 to-transparent',
    glow: 'rgba(16,185,129,0.15)',
    iconBg: '#10b981',
  },
  {
    title: 'Mobile Applications', Icon: Phone,
    desc: 'Native and cross-platform mobile apps for iOS and Android.',
    grad: 'from-violet-500/10 via-purple-500/5 to-transparent',
    glow: 'rgba(139,92,246,0.15)',
    iconBg: '#8b5cf6',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section bg-white">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="eyebrow">What We Do</p>
          <h2 className="section-title mb-4">Our Core Expertise</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            End-to-end digital solutions — from design to deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group h-full transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card-hover rounded-2xl"
            >
              <GlareHover
                background="#ffffff"
                borderColor="rgba(0,0,0,0.07)"
                borderRadius="16px"
                glareColor={svc.iconBg}
                glareOpacity={0.15}
                transitionDuration={600}
                className="w-full h-full p-8 flex flex-col gap-4 text-left items-start justify-start relative overflow-hidden"
              >
                {/* Hover gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${svc.grad}
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                {/* Top border accent */}
                <div
                  className="absolute top-0 inset-x-0 h-[2px] opacity-0 group-hover:opacity-100
                             transition-opacity duration-500 rounded-t-2xl pointer-events-none"
                  style={{ background: `linear-gradient(90deg, ${svc.iconBg}, transparent)` }}
                />

                {/* Icon with glow */}
                <div className="relative w-12 h-12 flex-shrink-0 pointer-events-none">
                  {/* Glow layer */}
                  <div
                    className="absolute inset-0 rounded-xl blur-md scale-125
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: svc.glow }}
                  />
                  {/* Icon box */}
                  <div
                    className="relative w-12 h-12 rounded-xl flex items-center justify-center
                               transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${svc.iconBg}18`,
                      border: `1px solid ${svc.iconBg}30`,
                    }}
                  >
                    <svc.Icon
                      size={22}
                      color={svc.iconBg}
                      className="transition-transform duration-300 group-hover:rotate-[-8deg]"
                    />
                  </div>
                </div>

                <h3 className="relative text-lg font-bold text-gray-900 pointer-events-none">{svc.title}</h3>
                <p className="relative text-gray-500 text-sm leading-relaxed flex-1 pointer-events-none">{svc.desc}</p>

                {/* Arrow link — slides up on hover */}
                <a
                  href="#contact"
                  className="relative text-sm font-semibold flex items-center gap-1
                             opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0
                             transition-all duration-300 mt-auto"
                  style={{ color: svc.iconBg }}
                >
                  Get Started →
                </a>
              </GlareHover>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
