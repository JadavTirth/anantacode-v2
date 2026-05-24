import { useState } from 'react';
import { GitBranch, Mail, MapPin } from './Icons';

const footerLinks = {
  Services: [
    { label: 'Cyber Security',          href: '/services/cyber-security' },
    { label: 'Mobile Apps Development', href: '/services/mobile-apps' },
  ],
  Company: [
    { label: 'Our Process', href: '#process' },
    { label: 'Projects',    href: '#projects' },
    { label: 'About Us',    href: '#' },
    { label: 'Contact',     href: '#contact' },
    { label: 'Careers',     href: '/careers' },
  ],
};

export default function Footer() {
  const [nlEmail, setNlEmail] = useState('');
  const [nlStatus, setNlStatus] = useState('idle'); // idle | sending | sent | error

  const handleNewsletter = async (e) => {
    e.preventDefault();
    if (!nlEmail) return;
    setNlStatus('sending');

    const formData = new FormData();
    formData.append('access_key', '82e8b41c-8e90-4b3b-b1e8-499fa7b76729');
    formData.append('email', nlEmail);
    formData.append('subject', 'Newsletter Signup - AnantaCode');
    formData.append('message', `New newsletter subscription from: ${nlEmail}`);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setNlStatus('sent');
        setNlEmail('');
        setTimeout(() => setNlStatus('idle'), 3000);
      } else {
        setNlStatus('error');
        setTimeout(() => setNlStatus('idle'), 3000);
      }
    } catch {
      setNlStatus('error');
      setTimeout(() => setNlStatus('idle'), 3000);
    }
  };
  return (
    <footer style={{ background: '#0D0D0D', position: 'relative', overflow: 'hidden' }}>
      {/* ── Background watermark ── */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 select-none pointer-events-none whitespace-nowrap font-heading font-extrabold"
        style={{
          fontSize: 'clamp(6rem, 18vw, 16rem)',
          lineHeight: 0.85,
          color: 'rgba(255, 255, 255, 0.03)',
          letterSpacing: '-0.04em',
          transform: 'translateX(-50%) translateY(20%)',
        }}
      >
        AnantaCode
      </div>
      <div className="container-main py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* ── Brand ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 font-heading font-extrabold text-white text-lg mb-4">
              <img src="/logo.png" alt="AnantaCode SaaS engineering logo" loading="lazy" style={{ height: '44px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
              AnantaCode
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Engineering modern digital experiences for startups and businesses worldwide.
            </p>
            <div className="flex gap-3">
              {[GitBranch, Mail, MapPin].map((Icon, i) => (
                <a
                  key={i} href="#"
                  className="w-9 h-9 rounded-xl flex items-center justify-center
                             transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.4)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,59,59,0.15)';
                    e.currentTarget.style.borderColor = 'rgba(255,59,59,0.4)';
                    e.currentTarget.style.color = '#FF3B3B';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.4)';
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Links ── */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-bold text-white text-sm mb-5">{heading}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-white/40 text-sm transition-colors duration-200 hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ── Newsletter ── */}
          <div>
            <h4 className="font-bold text-white text-sm mb-3">Stay Updated</h4>
            <p className="text-white/40 text-sm mb-4">
              Tips on web dev & cloud tech, delivered monthly.
            </p>
            <form className="flex flex-col gap-2" onSubmit={handleNewsletter}>
              <input
                type="email" placeholder="Your email" required
                value={nlEmail}
                onChange={(e) => setNlEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-white/25
                           focus:outline-none focus:ring-2 transition-all"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(255,59,59,0.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
              <button
                type="submit"
                disabled={nlStatus === 'sending'}
                className="py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200
                           hover:opacity-90 hover:-translate-y-0.5 disabled:opacity-60"
                style={{ background: 'linear-gradient(135deg,#FF3B3B,#FF6B6B)' }}
              >
                {nlStatus === 'sending' ? 'Sending...' :
                 nlStatus === 'sent' ? '✓ Subscribed!' :
                 nlStatus === 'error' ? '✕ Error' :
                 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* ── Divider ── */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }} className="pt-6
             flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} AnantaCode. All rights reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service'].map((t) => (
              <a key={t} href="#"
                 className="text-white/25 text-xs hover:text-white/60 transition-colors duration-200">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
