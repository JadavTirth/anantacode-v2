import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

/* ── Typewriter hook ─────────────────── */
const WORDS = ['MVP Development', 'SaaS Engineering', 'AI Automation', 'Conversion-Focused Design', 'Startup Scaling', 'Secure Infrastructure'];

function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timer;
    if (!deleting && charIdx < current.length) {
      timer = setTimeout(() => setCharIdx(c => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timer = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIdx(i => (i + 1) % words.length);
    }
    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

/* ── Floating particles ──────────────── */
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 8 + 6,
  delay: Math.random() * 4,
  opacity: Math.random() * 0.4 + 0.1,
}));

/* ── Tech floating pills ─────────────── */
const PILLS = [
  { label: 'React', x: 8, y: 20, delay: 0 },
  { label: 'Next.js', x: 82, y: 15, delay: 0.5 },
  { label: 'Node.js', x: 5, y: 60, delay: 1 },
  { label: 'AWS', x: 85, y: 65, delay: 1.5 },
  { label: 'Docker', x: 75, y: 40, delay: 0.8 },
  { label: 'TypeScript', x: 12, y: 80, delay: 1.2 },
];



export default function HeroSection({ onCtaClick }) {
  const typed = useTypewriter(WORDS);
  const canvasRef = useRef(null);

  /* ── Animated canvas mesh ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const DOTS = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      DOTS.forEach(d => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,59,59,0.35)';
        ctx.fill();
      });

      // Connect nearby dots
      for (let i = 0; i < DOTS.length; i++) {
        for (let j = i + 1; j < DOTS.length; j++) {
          const dx = DOTS[i].x - DOTS[j].x;
          const dy = DOTS[i].y - DOTS[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255,59,59,${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(DOTS[i].x, DOTS[i].y);
            ctx.lineTo(DOTS[j].x, DOTS[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section
      className="relative min-h-screen md:h-screen flex flex-col justify-center overflow-hidden pt-24 pb-12 md:py-20"
      style={{ background: 'linear-gradient(135deg, #0A0A0A 0%, #110505 50%, #0f0a00 100%)' }}
    >
      {/* ── Canvas mesh background ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.7 }}
      />

      {/* ── Gradient blobs ── */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,59,59,0.12) 0%, transparent 70%)',
          animation: 'blobFloat 8s ease-in-out infinite'
        }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,107,0.08) 0%, transparent 70%)',
          animation: 'blobFloat 10s ease-in-out infinite reverse'
        }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,59,59,0.04) 0%, transparent 70%)' }} />

      {/* ── Floating particles ── */}
      {PARTICLES.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`, top: `${p.y}%`,
            width: p.size, height: p.size,
            background: '#FF3B3B',
            opacity: p.opacity,
            animation: `particleFloat ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* ── Floating tech pills ── */}
      {PILLS.map((pill, i) => (
        <motion.div
          key={pill.label}
          className="absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full
                     text-xs font-bold pointer-events-none"
          style={{
            left: `${pill.x}%`, top: `${pill.y}%`,
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,59,59,0.25)',
            color: 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(8px)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { delay: pill.delay + 1, duration: 0.6 },
            y: { delay: pill.delay + 1, duration: 4, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <span style={{ color: '#FF3B3B' }}>◆</span>
          {pill.label}
        </motion.div>
      ))}

      {/* ── Main content ── */}
      <div className="relative container-main z-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 sm:mb-8 text-xs font-bold uppercase tracking-widest"
            style={{
              background: 'rgba(255,59,59,0.1)',
              border: '1px solid rgba(255,59,59,0.3)',
              color: '#FF6B6B',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            Available for New Projects
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-extrabold leading-tight mb-3 sm:mb-4"
            style={{ fontSize: 'clamp(1.8rem, 6vw, 4.5rem)', color: '#ffffff' }}
          >
            We Build
            <br />
            <span
              className="relative inline-block"
              style={{
                background: 'linear-gradient(135deg,#FF3B3B 0%,#FF8C69 50%,#FF3B3B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {typed}
              {/* Cursor blink */}
              <span
                className="inline-block w-[3px] ml-1 align-middle"
                style={{
                  background: '#FF3B3B',
                  height: '0.8em',
                  animation: 'cursorBlink 0.8s step-end infinite',
                }}
              />
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base sm:text-lg mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            We develop secure, scalable, and high-performance
            web platforms for startups and businesses —
            combining modern development with cybersecurity expertise.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-row gap-2 sm:gap-4 justify-center mb-8 sm:mb-10"
          >
            <button
              onClick={onCtaClick}
              className="px-4 py-2.5 sm:px-8 sm:py-4 rounded-xl font-heading font-bold text-white text-xs sm:text-base
                         transition-all duration-300 hover:-translate-y-1 whitespace-nowrap"
              style={{
                background: 'linear-gradient(135deg,#FF3B3B 0%,#FF6B6B 100%)',
                boxShadow: '0 8px 32px rgba(255,59,59,0.4)',
              }}
            >
              Start Your Project →
            </button>
            <a
              href="#projects"
              className="px-4 py-2.5 sm:px-8 sm:py-4 rounded-xl font-heading font-semibold text-xs sm:text-base
                         transition-all duration-300 hover:-translate-y-1 whitespace-nowrap"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.8)',
                backdropFilter: 'blur(8px)',
              }}
            >
              View Our Work
            </a>
          </motion.div>

          {/* Trust features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6"
            style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
          >
            {[
              { title: 'Military-Grade Security', desc: 'Enterprise-level protection built into every layer' },
              { title: 'Scalable Architecture', desc: 'Cloud-native infrastructure designed for high traffic' },
              { title: 'Lightning Fast UX', desc: 'Optimized performance for maximum conversion rates' }
            ].map((feature, i) => (
              <div 
                key={i} 
                className="group relative p-4 sm:p-6 rounded-2xl transition-transform duration-300 hover:-translate-y-2 text-left"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Red hover glow */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: '0 0 20px rgba(255,59,59,0.15)',
                    border: '1px solid rgba(255,59,59,0.3)',
                  }}
                />
                <h3 className="text-white font-bold mb-1 sm:mb-2 text-sm sm:text-[15px]">{feature.title}</h3>
                <p className="text-[12px] sm:text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{feature.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Keyframes injected ── */}
      <style>{`
        @keyframes blobFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(30px, -20px) scale(1.05); }
          66%       { transform: translate(-20px, 15px) scale(0.97); }
        }
        @keyframes particleFloat {
          0%, 100% { transform: translateY(0px); opacity: var(--op, 0.2); }
          50%       { transform: translateY(-15px); }
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
