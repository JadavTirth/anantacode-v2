import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from './Icons';

const info = [
  { Icon: Mail, label: 'Email', value: 'info@anantacode.in' },
  { Icon: Phone, label: 'Phone', value: '+91 78784-41277 | +91 95103-32132' },
  { Icon: MapPin, label: 'Location', value: 'Gandhinagar, India' },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData();
    formData.append('access_key', '82e8b41c-8e90-4b3b-b1e8-499fa7b76729');
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('message', form.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="eyebrow">Get In Touch</p>
          <h2 className="section-title mb-4">Start Your Project Today</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55 }}
            className="glass-card"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1.5">Your Name</label>
                <input
                  type="text" required value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50
                             text-gray-900 text-sm placeholder-gray-400
                             focus:outline-none focus:border-red-primary focus:ring-2 focus:ring-red-primary/20
                             transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1.5">Email Address</label>
                <input
                  type="email" required value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50
                             text-gray-900 text-sm placeholder-gray-400
                             focus:outline-none focus:border-red-primary focus:ring-2 focus:ring-red-primary/20
                             transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1.5">Message</label>
                <textarea
                  required value={form.message} rows={4}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50
                             text-gray-900 text-sm placeholder-gray-400 resize-vertical
                             focus:outline-none focus:border-red-primary focus:ring-2 focus:ring-red-primary/20
                             transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full justify-center mt-1 disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending...' :
                  status === 'sent' ? '✓ Message Sent!' :
                    status === 'error' ? '✕ Error, try again' :
                      <><Send size={16} /> Send Message</>}
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55 }}
            className="flex flex-col gap-6"
          >
            <div className="glass-card">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Let's Build Something Great</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Whether you're a startup launching your first product or an enterprise looking to
                modernise, we're here to help you succeed.
              </p>
              <div className="flex flex-col gap-4">
                {info.map(({ Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-primary/10 border border-red-primary/20
                                    flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-red-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">{label}</p>
                      <p className="text-sm font-semibold text-gray-900">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Banner */}
            <div className="relative rounded-2xl overflow-hidden p-8 text-white"
              style={{ background: 'linear-gradient(135deg, #FF3B3B 0%, #FF6B6B 40%, #7F1D1D 100%)' }}>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <p className="text-white/70 text-sm font-semibold uppercase tracking-wider mb-2">Response time</p>
              <p className="text-2xl font-extrabold font-heading mb-1">Within 24 Hours</p>
              <p className="text-white/80 text-sm">We respond to every enquiry, no exceptions.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
