import { motion } from 'framer-motion';
import TextType from './TextType';

export default function CTABanner({ onCtaClick }) {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #FF3B3B 0%, #FF6B6B 40%, #7F1D1D 100%)',
        }}
      />

      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(to right,rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.1) 1px,transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Content */}
      <div className="relative container-main text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white/70 text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Start Today
          </p>

          <h2
            className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl
                       leading-tight mb-6 text-white min-h-[1.2em]"
          >
            <TextType
              text={[
                'Ready to Build Something Great?',
                'Got an Idea? Let\'s Ship It.',
                'Let\'s Create Your Next Big Thing.',
                'Your Vision. Our Execution.',
              ]}
              typingSpeed={55}
              deletingSpeed={28}
              pauseDuration={2200}
              cursorCharacter="|"
              cursorClassName="text-white/60"
              showCursor={true}
              startOnVisible={true}
              as="span"
            />
          </h2>

          <p className="text-white/75 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Let's turn your idea into a high-performance digital product.
            Get a free consultation — no strings attached.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onCtaClick}
              className="px-8 py-4 bg-white text-gray-900 font-heading font-bold
                         rounded-xl text-base shadow-xl
                         hover:bg-gray-50 hover:-translate-y-1
                         transition-all duration-300"
            >
              Start Your Project →
            </button>
            <a
              href="#projects"
              className="px-8 py-4 border-2 border-white/40 text-white font-heading font-semibold
                         rounded-xl text-base backdrop-blur-sm
                         hover:border-white/80 hover:bg-white/10 hover:-translate-y-1
                         transition-all duration-300"
            >
              View Our Work
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-white/60 text-sm">
            {['✓ Free Consultation', '✓ 24hr Response', '✓ No Lock-in Contracts'].map((t) => (
              <span key={t} className="font-medium">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
