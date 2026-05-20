import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight } from './Icons';
import Shuffle from './Shuffle';
import './CardNav.css';

const NAV_ITEMS = [
  {
    label: 'Services',
    bgColor: 'oklch(37.1% 0 0)',
    textColor: '#fff',
    links: [
      { label: 'Cyber Security', href: '#services', ariaLabel: 'Cyber Security' },
      { label: 'Web Development', href: '#services', ariaLabel: 'Web Development' },
      { label: 'AI Automation', href: '#services', ariaLabel: 'AI Automation' },
      { label: 'UI/UX Design', href: '#services', ariaLabel: 'UI/UX Design' },
      { label: 'Cloud & DevOps', href: '#services', ariaLabel: 'Cloud & DevOps' },
    ],
  },
  {
    label: 'Company',
    bgColor: 'oklch(37.4% 0.01 67.558)',
    textColor: '#fff',
    links: [
      { label: 'Our Process', href: '#process', ariaLabel: 'Our Development Process' },
      { label: 'Projects', href: '#projects', ariaLabel: 'Featured Projects' },
      { label: 'Why AnantaCode', href: '#whyChooseUs', ariaLabel: 'Why AnantaCode' },
    ],
  },
  {
    label: 'Connect',
    bgColor: 'oklch(21.8% 0.008 223.9)',
    textColor: '#fff',
    links: [
      { label: 'Email Us', href: '#contact', ariaLabel: 'Email us' },
      { label: 'Contact Us', href: '#contact', ariaLabel: 'Contact Us' },
    ],
  },
];

const CardNav = ({
  items = NAV_ITEMS,
  ease = 'power3.out',
  baseColor = '#ffffff',
  menuColor = '#111111',
  buttonBgColor = '#FF3B3B',
  buttonTextColor = '#ffffff',
  onCtaClick,
}) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);

  const calcHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content');
      if (contentEl) {
        const prev = {
          vis: contentEl.style.visibility,
          pe: contentEl.style.pointerEvents,
          pos: contentEl.style.position,
          h: contentEl.style.height,
        };
        Object.assign(contentEl.style, {
          visibility: 'visible', pointerEvents: 'auto',
          position: 'static', height: 'auto',
        });
        contentEl.offsetHeight; // reflow
        const total = 60 + contentEl.scrollHeight + 16;
        Object.assign(contentEl.style, {
          visibility: prev.vis, pointerEvents: prev.pe,
          position: prev.pos, height: prev.h,
        });
        return total;
      }
    }
    return 260;
  };

  const buildTl = () => {
    const navEl = navRef.current;
    if (!navEl) return null;
    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });
    const tl = gsap.timeline({ paused: true });
    tl.to(navEl, { height: calcHeight, duration: 0.4, ease });
    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');
    return tl;
  };

  useLayoutEffect(() => {
    const tl = buildTl();
    tlRef.current = tl;
    return () => { tl?.kill(); tlRef.current = null; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ease, items]);

  useLayoutEffect(() => {
    const onResize = () => {
      if (!tlRef.current) return;
      if (isExpanded) {
        gsap.set(navRef.current, { height: calcHeight() });
        tlRef.current.kill();
        const tl = buildTl();
        if (tl) { tl.progress(1); tlRef.current = tl; }
      } else {
        tlRef.current.kill();
        const tl = buildTl();
        if (tl) tlRef.current = tl;
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded]);

  /* ── Click outside to close ── */
  useEffect(() => {
    if (!isExpanded) return;
    const handleOutside = (e) => {
      if (navRef.current && !navRef.current.closest('.card-nav-container').contains(e.target)) {
        setHamburgerOpen(false);
        const tl = tlRef.current;
        if (tl) {
          tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
          tl.reverse();
        }
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [isExpanded]);

  const toggle = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCard = (i) => (el) => { if (el) cardsRef.current[i] = el; };

  return (
    <div className="card-nav-container">
      <nav ref={navRef} className={`card-nav ${isExpanded ? 'open' : ''}`} style={{ backgroundColor: baseColor }}>

        {/* ── Top bar ── */}
        <div className="card-nav-top">
          {/* Hamburger */}
          <div
            className={`hamburger-menu ${hamburgerOpen ? 'open' : ''}`}
            onClick={toggle}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && toggle()}
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            style={{ color: menuColor }}
          >
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </div>

          {/* Logo */}
          <a href="/" className="card-nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <img
              src="/logo.png"
              alt="AnantaCode web solutions"
              loading="lazy"
              style={{ height: '50px', width: 'auto', objectFit: 'contain' }}
            />
            <Shuffle
              text="AnantaCode"
              tag="span"
              shuffleDirection="right"
              duration={0.3}
              stagger={0.025}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              threshold={0}
              rootMargin="0px"
              triggerOnce={false}
              triggerOnHover={true}
              textAlign="left"
              style={{ fontWeight: 700, fontSize: '1rem', color: '#111', fontFamily: 'inherit', letterSpacing: '-0.01em', lineHeight: 1.2 }}
            />
          </a>

          {/* CTA */}
          <button
            type="button"
            className="card-nav-cta-button"
            style={{
              background: 'linear-gradient(135deg, #FF3B3B 0%, #FF6B6B 100%)',
              color: buttonTextColor,
              boxShadow: '0 4px 14px rgba(255,59,59,0.35)',
              border: 'none'
            }}
            onClick={onCtaClick}
          >
            Let's Talk
          </button>
        </div>

        {/* ── Cards panel ── */}
        <div className="card-nav-content" aria-hidden={!isExpanded}>
          {items.slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card"
              ref={setCard(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label">{item.label}</div>
              <div className="nav-card-links">
                {item.links?.map((lnk, i) => (
                  <a
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link"
                    href={lnk.href || '#'}
                    aria-label={lnk.ariaLabel}
                    onClick={() => { if (isExpanded) toggle(); }}
                    style={{ color: item.textColor }}
                  >
                    <ArrowUpRight size={15} className="nav-card-link-icon" />
                    {lnk.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
