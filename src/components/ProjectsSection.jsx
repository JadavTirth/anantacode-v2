import { motion } from 'framer-motion';
import { ExternalLink, GitBranch } from './Icons';

const projects = [
  {
    title: 'Brahmastra — AI-Powered Firewall',
    desc: 'Real-time intelligent firewall defending web apps from DDoS, SQL Injection, XSS and bot attacks with sub-2ms response. Features live threat feeds, court-admissible attack logs, and automated regional language reporting.',
    tech: ['FastAPI', 'Python (ML)', 'React', 'Redis'],
    img: '/brahmastra-dashboard.jpg',
    color: '#FF3B3B',
    bgColor: '#0f1117',
    link: '#',
  },
  {
    title: 'Krushi Mart — Farmer\'s Digital Marketplace',
    desc: 'A React Native (Expo) mobile app for farmers to buy farming essentials (medicines, fertilizers, pesticides) and connect via a Farmer Community — with posts, likes & comments. Supports English, Hindi & Gujarati via i18next.',
    tech: ['React Native', 'Expo', 'Supabase', 'i18next'],
    img: '/krushimart-app.jpg',
    color: '#10b981',
    bgColor: '#e8f5e9',
    link: '#',
    portrait: true,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section bg-white">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="eyebrow">Our Work</p>
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-gray-900 leading-tight">
            Featured Projects
          </h2>
        </motion.div>

        <div className="flex flex-col gap-10">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`glass-card overflow-hidden p-0 grid grid-cols-1 ${proj.portrait ? 'md:grid-cols-[1fr_2fr]' : 'md:grid-cols-2'}`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden h-[220px] md:h-[280px] ${i % 2 !== 0 ? 'md:order-2' : ''}`}
                style={{ background: proj.bgColor || '#f5f5f5' }}
              >
                <img
                  src={proj.img} alt={proj.title}
                  loading="lazy"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.parentElement.style.background = `linear-gradient(135deg, ${proj.color}22, ${proj.color}44)`;
                    e.target.style.display = 'none';
                  }}
                />
                {/* Colour fallback gradient shown by onError */}
              </div>

              {/* Content */}
              <div className={`p-5 md:p-7 flex flex-col justify-center ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{proj.title}</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-5">{proj.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tech.map((t) => (
                    <span key={t} className="text-xs font-semibold px-3 py-1 rounded-full bg-black/5 text-gray-700 border border-black/8">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {proj.link && proj.link !== '#' ? (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm py-2 px-5 flex items-center gap-2"
                    >
                      Live Preview <ExternalLink size={15} />
                    </a>
                  ) : (
                    <button
                      className="btn-primary text-sm py-2 px-5 flex items-center gap-2 opacity-50 cursor-not-allowed"
                      disabled
                    >
                      Coming Soon <ExternalLink size={15} />
                    </button>
                  )}
                  <button className="btn-secondary text-sm py-2 px-4">
                    <GitBranch size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
