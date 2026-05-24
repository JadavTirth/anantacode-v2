import { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowUpRight } from './Icons';
import Shuffle from './Shuffle';
import './HoverNav.css';

const NAV = [
  {
    label: 'Services',
    cols: [
      {
        heading: 'What We Do',
        links: [
          { label: 'Cyber Security',          href: '/services/cyber-security', route: true },
          { label: 'Mobile Apps Development', href: '/services/mobile-apps', route: true },
        ],
      },
    ],
  },
  {
    label: 'Company',
    cols: [
      {
        heading: 'About Us',
        links: [
          { label: 'Our Process',      href: '#process' },
          { label: 'Projects',         href: '#projects' },
          { label: 'Why AnantaCode',   href: '#whyChooseUs' },
          { label: 'Careers',          href: '/careers', route: true },
        ],
      },
    ],
  },
  {
    label: 'Connect',
    cols: [
      {
        heading: 'Get In Touch',
        links: [
          { label: 'Email Us',   href: '#contact' },
          { label: 'Contact Us', href: '#contact' },
        ],
      },
    ],
  },
];

export default function HoverNav({ onCtaClick }) {
  const [active, setActive]   = useState(null);   // which nav item is hovered
  const [visible, setVisible] = useState(false);   // menu open
  const hideTimer = useRef(null);
  const navigate  = useNavigate();

  const open  = (label) => {
    clearTimeout(hideTimer.current);
    setActive(label);
    setVisible(true);
  };
  const close = () => {
    hideTimer.current = setTimeout(() => {
      setVisible(false);
      setActive(null);
    }, 120);
  };
  const keep  = () => clearTimeout(hideTimer.current);

  /* close on outside click */
  useEffect(() => {
    const fn = (e) => {
      if (!e.target.closest('.hn-root')) { setVisible(false); setActive(null); }
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  const handleLink = (lnk) => {
    setVisible(false); setActive(null);
    if (lnk.route) { navigate(lnk.href); }
    else if (lnk.href.startsWith('#')) {
      const el = document.querySelector(lnk.href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeItem = NAV.find((n) => n.label === active);

  return (
    <div className="hn-root">
      <nav className="hn-bar">
        {/* Logo */}
        <Link to="/" className="hn-logo">
          <img src="/logo.png" alt="AnantaCode" style={{ height: 44, width: 'auto', objectFit: 'contain' }} />
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
            style={{ fontWeight: 700, fontSize: '22px', color: '#111', fontFamily: 'inherit', letterSpacing: '-0.01em' }}
          />
        </Link>

        {/* Nav items */}
        <ul className="hn-links">
          {NAV.map((item) => (
            <li key={item.label}
              onMouseEnter={() => open(item.label)}
              onMouseLeave={close}
            >
              <button
                className={`hn-link-btn ${active === item.label && visible ? 'hn-link-btn--active' : ''}`}
              >
                {item.label}
                <span className={`hn-chevron ${active === item.label && visible ? 'hn-chevron--open' : ''}`}>
                  ▾
                </span>
              </button>

              {/* Underline indicator */}
              {active === item.label && visible && (
                <span className="hn-underline" />
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="hn-cta" onClick={onCtaClick}>
          Let's Talk
        </button>
      </nav>

      {/* ── Mega menu panel ── */}
      {visible && activeItem && (
        <div
          className="hn-mega"
          onMouseEnter={keep}
          onMouseLeave={close}
        >
          <div className="hn-mega-inner">
            {activeItem.cols.map((col) => (
              <div key={col.heading} className="hn-col">
                <p className="hn-col-heading">{col.heading}</p>
                <ul className="hn-col-links">
                  {col.links.map((lnk) => (
                    <li key={lnk.label}>
                      <button
                        className="hn-menu-link"
                        onClick={() => handleLink(lnk)}
                      >
                        <ArrowUpRight size={13} className="hn-menu-arrow" />
                        {lnk.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
