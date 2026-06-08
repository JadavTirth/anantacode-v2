import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HoverNav from './components/HoverNav';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import WaveDivider from './components/WaveDivider';
import ProcessSection from './components/ProcessSection';
import ProjectsSection from './components/ProjectsSection';
import CTABanner from './components/CTABanner';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PopupForm from './components/PopupForm';
import CyberSecurity from './pages/CyberSecurity';
import MobileApps from './pages/MobileApps';
import Careers from './pages/Careers';

/* ── Scroll progress indicator ── */
function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const fn = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      setPct((scrollTop / (scrollHeight - clientHeight)) * 100);
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[9998] bg-transparent">
      <div
        className="h-full bg-gradient-brand transition-all duration-75"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

/* ── Home Page ── */
function HomePage() {
  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    const t = setTimeout(() => setPopupVisible(true), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <ScrollProgress />
      <PopupForm isVisible={popupVisible} onClose={() => setPopupVisible(false)} />
      <HoverNav onCtaClick={() => setPopupVisible(true)} />
      <main>
        {/* ── Hero ── */}
        <HeroSection onCtaClick={() => setPopupVisible(true)} />

        {/* ── Stats ── */}
        <StatsSection />

        {/* ── Services ── */}
        <ServicesSection />

        {/* ── Process ── */}
        <ProcessSection />

        {/* ── Projects ── */}
        <ProjectsSection />

        {/* ── Mid-page CTA Banner ── */}
        <CTABanner onCtaClick={() => setPopupVisible(true)} />

        {/* ── Why Choose Us ── */}
        <WhyChooseUs />

        {/* ── Testimonials ── */}
        <TestimonialsSection />

        {/* ── Contact ── */}
        <WaveDivider topColor="#f9fafb" bottomColor="#ffffff" direction="up" height={50} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services/cyber-security" element={<CyberSecurity />} />
      <Route path="/services/mobile-apps" element={<MobileApps />} />
      <Route path="/careers" element={<Careers />} />
    </Routes>
  );
}

