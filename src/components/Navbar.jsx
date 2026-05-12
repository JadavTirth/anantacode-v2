import { useState, useEffect } from 'react';
import { Menu, X } from './Icons';

const links = [
  { label: 'Services',  href: '#services' },
  { label: 'Process',   href: '#process' },
  { label: 'Projects',  href: '#projects' },
  { label: 'Contact',   href: '#contact' },
];

export default function Navbar({ onCtaClick }) {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-black/[0.06]' : 'bg-transparent'
      }`}
    >
      <div className="container-main flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2 font-heading font-bold text-gray-900 text-lg"
        >
          <span className="text-red-primary text-2xl font-extrabold">⌬</span>
          AnantaCode
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="nav-link text-sm">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={onCtaClick}
            className="hidden sm:inline-flex btn-primary text-sm py-2 px-5"
          >
            Let's Talk
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="container-main py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 px-2 text-gray-700 font-medium text-sm border-b border-gray-50 last:border-0 hover:text-red-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => { setOpen(false); onCtaClick(); }}
              className="btn-primary mt-3 text-sm"
            >
              Let's Talk
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
