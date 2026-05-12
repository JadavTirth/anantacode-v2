import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from './Icons';

const perks = [
  { emoji: '⚡', text: 'Response within 24 hours' },
  { emoji: '🔒', text: 'No spam, ever. Promise.' },
  { emoji: '🎯', text: 'Free project consultation' },
  { emoji: '🚀', text: 'Launch-ready in weeks' },
];

export default function PopupForm({ isVisible, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { setSent(false); onClose(); setForm({ name: '', email: '', message: '' }); }, 2500);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ backdropFilter: 'blur(12px)', background: 'rgba(0,0,0,0.65)' }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 30 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            className="relative w-full max-w-3xl flex rounded-3xl overflow-hidden shadow-2xl"
            style={{ minHeight: 480 }}
          >
            {/* ── LEFT PANEL — dark branding ── */}
            <div
              className="hidden md:flex flex-col justify-between w-[42%] flex-shrink-0 p-8 relative overflow-hidden"
              style={{ background: 'linear-gradient(145deg, #0D0D0D 0%, #1a0808 60%, #2d0000 100%)' }}
            >
              {/* Decorative glow */}
              <div className="absolute -top-16 -left-16 w-56 h-56 bg-red-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -right-8 w-40 h-40 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,59,59,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,59,59,.6) 1px,transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
              />

              {/* Logo */}
              <div className="relative">
                <div className="flex items-center gap-2 mb-8">
                  <span style={{ color: '#FF3B3B', fontSize: '1.8rem', lineHeight: 1 }}>⌬</span>
                  <span className="text-white font-heading font-bold text-lg tracking-tight">AnantaCode</span>
                </div>
                <h2 className="text-white font-heading font-extrabold text-2xl leading-tight mb-3">
                  Let's build something<br />
                  <span style={{ color: '#FF3B3B' }}>amazing together.</span>
                </h2>
                <p className="text-white/50 text-sm leading-relaxed">
                  Tell us about your project and we'll craft the perfect solution for you.
                </p>
              </div>

              {/* Perks */}
              <div className="relative flex flex-col gap-3">
                {perks.map(({ emoji, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <span className="text-lg w-6 text-center">{emoji}</span>
                    <span className="text-white/70 text-sm font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT PANEL — form ── */}
            <div className="flex-1 flex flex-col bg-white relative p-8">
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100
                           flex items-center justify-center text-gray-400
                           hover:bg-red-50 hover:text-red-500 transition-all duration-200"
              >
                <X size={15} />
              </button>

              {/* Heading */}
              <div className="mb-6">
                <p className="text-xs font-bold text-red-500 uppercase tracking-widest mb-1">Free Consultation</p>
                <h3 className="text-2xl font-extrabold font-heading text-gray-900 leading-tight">
                  Start Your Project
                </h3>
                <p className="text-gray-400 text-sm mt-1">We respond to every message, guaranteed.</p>
              </div>

              {/* Form */}
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex-1 flex flex-col items-center justify-center text-center gap-4"
                >
                  <div className="text-5xl">🎉</div>
                  <h4 className="text-xl font-bold font-heading text-gray-900">Message Sent!</h4>
                  <p className="text-gray-500 text-sm">We'll get back to you within 24 hours.</p>
                  <div
                    className="w-full h-1 rounded-full mt-4 overflow-hidden"
                    style={{ background: '#f3f4f6' }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: '#FF3B3B' }}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 2.3, ease: 'linear' }}
                    />
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                      Your Name
                    </label>
                    <input
                      type="text" value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm
                                 text-gray-900 placeholder-gray-300
                                 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20
                                 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email" required value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm
                                 text-gray-900 placeholder-gray-300
                                 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20
                                 transition-all duration-200"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      value={form.message} rows={3}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="We need a web app that..."
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm
                                 text-gray-900 placeholder-gray-300 resize-none
                                 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20
                                 transition-all duration-200"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-heading font-bold text-white text-sm
                               flex items-center justify-center gap-2
                               hover:-translate-y-0.5 active:translate-y-0
                               transition-all duration-200 shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #FF3B3B 0%, #FF6B6B 60%, #cc2020 100%)',
                      boxShadow: '0 8px 24px rgba(255,59,59,0.35)',
                    }}
                  >
                    <Send size={15} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
