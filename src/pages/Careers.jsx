import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import HoverNav from '../components/HoverNav';
import Footer from '../components/Footer';
import { MapPin } from '../components/Icons';

/* ── Data ─────────────────────────────────────── */
const ROLES = [
  {
    id: 1,
    title: 'Frontend Developer',
    type: 'Full-Time',
    mode: 'Remote / Hybrid',
    location: 'Gandhinagar, India',
    dept: 'Engineering',
    tags: ['React', 'Tailwind', 'Vite'],
    desc: 'Build blazing-fast, pixel-perfect UIs for our SaaS products and client projects. You\'ll work closely with our design and backend teams to ship world-class digital experiences.',
    requirements: ['1+ years React experience', 'Strong CSS/Tailwind skills', 'Familiar with REST APIs', 'Git workflow'],
  },
  {
    id: 2,
    title: 'Backend Developer',
    type: 'Full-Time',
    mode: 'Remote / Hybrid',
    location: 'Gandhinagar, India',
    dept: 'Engineering',
    tags: ['Node.js', 'Python', 'PostgreSQL'],
    desc: 'Design and ship robust APIs, microservices, and data pipelines. You\'ll be core to our Brahmastra AI security engine and client backend infrastructure.',
    requirements: ['1+ years backend experience', 'Node.js or Python (FastAPI)', 'Database design', 'REST / GraphQL'],
  },
  {
    id: 3,
    title: 'Cyber Security Intern',
    type: 'Internship',
    mode: 'On-site',
    location: 'Gandhinagar, India',
    dept: 'Security',
    tags: ['VAPT', 'Burp Suite', 'Python'],
    desc: 'Hands-on internship working on real VAPT engagements, threat monitoring, and our Brahmastra AI firewall. Learn from active security professionals and get exposure to enterprise clients.',
    requirements: ['CS/IT student (3rd or 4th year)', 'Basic networking knowledge', 'Curiosity for ethical hacking', 'Any scripting language'],
  },
  {
    id: 4,
    title: 'Mobile App Developer',
    type: 'Internship / Full-Time',
    mode: 'Remote',
    location: 'Gandhinagar, India',
    dept: 'Engineering',
    tags: ['React Native', 'Expo', 'Supabase'],
    desc: 'Build and maintain cross-platform mobile applications. You\'ll work on live products like Krushi Mart and help us expand our mobile services offering.',
    requirements: ['Experience with React Native / Expo', 'State management (Redux/Zustand)', 'API integration', 'App store deployment'],
  },
  {
    id: 5,
    title: 'UI/UX Design Intern',
    type: 'Internship',
    mode: 'Remote / On-site',
    location: 'Gandhinagar, India',
    dept: 'Design',
    tags: ['Figma', 'Prototyping', 'User Research'],
    desc: 'Shape the visual identity of AnantaCode\'s products. Create wireframes, design systems, and high-fidelity prototypes for our client projects and in-house SaaS tools.',
    requirements: ['Figma proficiency', 'Portfolio of 2+ projects', 'Basic design principles', 'Good communication'],
  },
  {
    id: 6,
    title: 'DevOps / Cloud Intern',
    type: 'Internship',
    mode: 'Remote',
    location: 'Gandhinagar, India',
    dept: 'Infrastructure',
    tags: ['AWS', 'Docker', 'CI/CD'],
    desc: 'Work on our cloud infrastructure, automate deployment pipelines, and help us scale our security and SaaS products on AWS. Learn real-world DevOps from day one.',
    requirements: ['Basic Linux/CLI knowledge', 'AWS or any cloud exposure', 'Docker basics', 'Interest in automation'],
  },
];

const PERKS = [
  { title: 'Real Work. Day One.', desc: 'No chai fetching. You ship real code to real products from your first week.' },
  { title: 'Learn from Builders', desc: 'Work alongside founders and engineers who have shipped SaaS, mobile, and security products.' },
  { title: 'Remote Friendly', desc: 'Most roles are remote or hybrid. We care about output, not office hours.' },
  { title: 'Certificate + LOR', desc: 'Every intern gets a detailed Letter of Recommendation and experience certificate.' },
  { title: 'Stipend / Salary', desc: 'Competitive stipend for interns. Market-rate salary for full-time roles.' },
  { title: 'Fast Growth', desc: 'Small team = big ownership. Your work directly impacts product and company direction.' },
];

const DEPT_COLORS = {
  Engineering: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  Security:    { bg: 'bg-red-50',  text: 'text-red-700',  border: 'border-red-200' },
  Design:      { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  Infrastructure: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
};

const TYPE_BADGE = {
  'Full-Time': 'bg-emerald-100 text-emerald-700',
  'Internship': 'bg-amber-100 text-amber-700',
  'Internship / Full-Time': 'bg-blue-100 text-blue-700',
};

/* ── Application Modal ────────────────────────── */
function ApplyModal({ role, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', portfolio: '', message: '' });
  const [status, setStatus] = useState('idle');

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const fd = new FormData();
    fd.append('access_key', '82e8b41c-8e90-4b3b-b1e8-499fa7b76729');
    fd.append('subject', `Job Application — ${role.title} | AnantaCode`);
    fd.append('from_name', form.name);
    fd.append('email', form.email);
    fd.append('message',
      `Role: ${role.title}\nType: ${role.type}\nPhone: ${form.phone}\nPortfolio: ${form.portfolio}\n\nMessage:\n${form.message}`
    );
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd });
      const data = await res.json();
      setStatus(data.success ? 'sent' : 'error');
    } catch { setStatus('error'); }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)' }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
        >
          {/* Header */}
          <div className="p-6 border-b border-gray-100 flex items-start justify-between">
            <div>
              <p className="eyebrow mb-1">Apply Now</p>
              <h3 className="text-xl font-bold text-gray-900">{role.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{role.type} · {role.location}</p>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl leading-none mt-1">×</button>
          </div>

          {status === 'sent' ? (
            <div className="p-10 text-center">

              <h4 className="text-xl font-bold mb-2">Application Submitted!</h4>
              <p className="text-gray-500 text-sm">We'll review your application and get back to you within 3-5 business days.</p>
              <button onClick={onClose} className="btn-primary mt-6 text-sm">Close</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
              {[
                { label: 'Full Name *', key: 'name', type: 'text', placeholder: 'Vivek Patel' },
                { label: 'Email Address *', key: 'email', type: 'email', placeholder: 'vivek@example.com' },
                { label: 'Phone Number', key: 'phone', type: 'tel', placeholder: '+91 98765 43210' },
                { label: 'Portfolio / GitHub / LinkedIn', key: 'portfolio', type: 'url', placeholder: 'https://github.com/yourusername' },
              ].map(({ label, key, type, placeholder }) => (
                <div key={key}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">{label}</label>
                  <input
                    type={type} required={label.includes('*')}
                    placeholder={placeholder} value={form[key]}
                    onChange={set(key)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent transition-all"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Why do you want to join AnantaCode? *</label>
                <textarea
                  required rows={4} placeholder="Tell us about yourself, your experience, and why this role excites you..."
                  value={form.message} onChange={set('message')}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent transition-all resize-none"
                />
              </div>
              {status === 'error' && (
                <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
              )}
              <button type="submit" disabled={status === 'sending'}
                className="btn-primary w-full justify-center disabled:opacity-60"
              >
                {status === 'sending' ? 'Submitting...' : 'Submit Application →'}
              </button>
              <p className="text-xs text-gray-400 text-center">We typically respond within 3–5 business days.</p>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ── Role Card ────────────────────────────────── */
function RoleCard({ role, onApply }) {
  const [open, setOpen] = useState(false);
  const dept = DEPT_COLORS[role.dept] || DEPT_COLORS.Engineering;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      className="glass-card !p-0 overflow-hidden hover:!border-red-primary/30"
    >
      {/* Card top */}
      <div
        className="p-6 cursor-pointer"
        onClick={() => setOpen((o) => !o)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${dept.bg} ${dept.text} ${dept.border}`}>
                {role.dept}
              </span>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${TYPE_BADGE[role.type]}`}>
                {role.type}
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">{role.title}</h3>
            <p className="text-sm text-gray-500 flex items-center gap-1.5 justify-start">
              <MapPin size={14} className="text-gray-400" /> {role.location} · {role.mode}
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={(e) => { e.stopPropagation(); onApply(role); }}
              className="btn-primary text-sm py-2 px-5"
            >
              Apply
            </button>
            <span className={`text-gray-400 transition-transform duration-300 text-lg ${open ? 'rotate-180' : ''}`}>▾</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {role.tags.map((t) => (
            <span key={t} className="text-xs font-medium px-3 py-1 rounded-full bg-black/5 text-gray-600 border border-black/8">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Expandable details */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-gray-100 pt-5">
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{role.desc}</p>
              <h4 className="text-sm font-bold text-gray-900 mb-3">What we're looking for</h4>
              <ul className="flex flex-col gap-2">
                {role.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-red-500 font-bold mt-0.5">→</span> {r}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onApply(role)}
                className="btn-primary text-sm mt-6"
              >
                Apply for this role →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Page ─────────────────────────────────────── */
export default function Careers() {
  const [activeRole, setActiveRole] = useState(null);
  const [filter, setFilter] = useState('All');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const FILTERS = ['All', 'Full-Time', 'Internship', 'Engineering', 'Security', 'Design'];

  const filtered = ROLES.filter((r) => {
    if (filter === 'All') return true;
    return r.type.includes(filter) || r.dept === filter;
  });

  return (
    <>
      <HoverNav />

      {/* ── HERO ── */}
      <section className="relative bg-gray-950 text-white overflow-hidden pt-32 pb-24 px-4">
        {/* Grid bg */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(255,59,59,0.12) 0%, transparent 70%)' }} />

        <div className="container-main relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="eyebrow mb-6">We're Hiring</p>
            <h1 className="text-4xl md:text-6xl font-extrabold font-heading leading-tight mb-6"
              style={{ letterSpacing: '-0.03em' }}>
              Build the future of<br />
              <span className="text-gradient">digital India</span> with us.
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
              AnantaCode is a Gandhinagar-based tech studio building AI security, SaaS, and mobile products.
              We're a small team that ships fast — and we want builders, not box-tickers.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#open-roles" className="btn-primary">View Open Roles →</a>
              <Link to="/#contact" className="btn-secondary !text-white !border-white/20 hover:!bg-white/10">
                Have Questions?
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="grid grid-cols-3 gap-6 mt-16 max-w-lg mx-auto"
          >
            {[
              { n: '10+', l: 'Projects Shipped' },
              { n: '3', l: 'Core Products' },
              { n: '100%', l: 'Remote Friendly' },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-2xl font-extrabold text-gradient font-heading">{s.n}</div>
                <div className="text-xs text-white/40 mt-1 uppercase tracking-widest">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PERKS ── */}
      <section className="section bg-white">
        <div className="container-main">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-14">
            <p className="eyebrow">Why AnantaCode</p>
            <h2 className="section-title !mb-4">Why work with us?</h2>
            <p className="text-gray-500 max-w-xl mx-auto">We're not a corporate. We're a startup where your code goes live, your ideas matter, and your growth is real.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERKS.map((p, i) => (
              <motion.div key={p.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="glass-card !hover:-translate-y-1.5"
              >
                <h3 className="text-base font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN ROLES ── */}
      <section id="open-roles" className="section bg-gray-50">
        <div className="container-main">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-12">
            <p className="eyebrow">Open Positions</p>
            <h2 className="section-title !mb-4">Find your role</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Click on any role to see details. Hit Apply and we'll get back to you within 5 business days.</p>
          </motion.div>

          {/* Filter chips */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {FILTERS.map((f) => (
              <button key={f} onClick={() => setFilter(f)}
                className={`text-sm font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                  filter === f
                    ? 'bg-gradient-brand text-white border-transparent shadow-red-glow'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Role cards */}
          <div className="flex flex-col gap-4 max-w-3xl mx-auto">
            <AnimatePresence>
              {filtered.map((role) => (
                <RoleCard key={role.id} role={role} onApply={setActiveRole} />
              ))}
            </AnimatePresence>
            {filtered.length === 0 && (
              <div className="text-center py-16 text-gray-400">
    
                <p>No roles match this filter right now. Check back soon!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── GENERAL APPLICATION ── */}
      <section className="py-20 px-4" style={{ background: 'linear-gradient(135deg,#FF3B3B 0%,#7F1D1D 100%)' }}>
        <div className="container-main text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading mb-4">Don't see your role?</h2>
            <p className="text-white/75 max-w-md mx-auto mb-8 text-lg">
              We're always looking for talented people. Send us a general application and we'll keep you in mind.
            </p>
            <a href="mailto:careers@anantacode.in"
              className="inline-flex items-center gap-2 bg-white text-red-600 font-bold px-8 py-4 rounded-xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              careers@anantacode.in
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Application Modal */}
      {activeRole && <ApplyModal role={activeRole} onClose={() => setActiveRole(null)} />}
    </>
  );
}
