import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HoverNav from '../components/HoverNav';
import Footer from '../components/Footer';
import './MobileApps.css';

export default function MobileApps() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HoverNav />

      <main>
        {/* ═══ HERO ═══ */}
        <section className="ma-hero">
          <div className="ma-hero-bg-blob" />
          <div className="ma-hero-line" />
          <div className="ma-w">
            <div className="ma-hero-grid">
              <div className="ma-hero-left">
                <div className="ma-eyebrow">Mobile Application Services</div>
                <h1>We build mobile apps that feel naturally native.</h1>
                <p>
                  High-performance iOS and Android applications powered by React Native, 
                  Expo, and offline-first database sync. Engineered for maximum 
                  smoothness.
                </p>
                <div className="ma-hero-cta">
                  <Link to="/#contact" className="ma-btn ma-btn-r">
                    Start Project
                  </Link>
                  <a href="#ma-services" className="ma-btn ma-btn-w">
                    Our Services
                  </a>
                </div>
              </div>

              <div className="ma-hero-right">
                <div className="ma-terminal">
                  <span className="ma-bl">$</span> expo export{' '}
                  <span className="ma-yl">--platform</span> all
                  <br />
                  <span className="ma-gr">[+]</span> Exporting Android bundle...
                  <br />
                  <span className="ma-gr">[+]</span> Exporting iOS bundle...
                  <br />
                  <span className="ma-gr">[+]</span> Optimizing images & static assets...
                  <br />
                  <span className="ma-gr">[+]</span> Minimizing JavaScript bundles (metro)...
                  <br />
                  <span className="ma-gr">[+]</span> Setting up offline-first sync (sqlite)...
                  <br />
                  <span className="ma-gr">[✓]</span>{' '}
                  <span className="ma-gr">
                    Build finished. Ready for App Store & Play Store.
                  </span>
                </div>
                <div className="ma-stat-row">
                  <div className="ma-stat">
                    <div className="ma-stat-n">20+</div>
                    <div className="ma-stat-l">Apps Launched</div>
                  </div>
                  <div className="ma-stat">
                    <div className="ma-stat-n">60 FPS</div>
                    <div className="ma-stat-l">Smooth animations</div>
                  </div>
                  <div className="ma-stat">
                    <div className="ma-stat-n">99.9%</div>
                    <div className="ma-stat-l">Crash-free sessions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ MARQUEE ═══ */}
        <div className="ma-marquee">
          <div className="ma-marquee-inner">
            {[
              'React Native', 'Expo', 'iOS Apps', 'Android Apps',
              'Offline-First Sync', 'Supabase Integration', 'Zustand',
              'Push Notifications', 'OTA Updates', 'Figma to Code',
              'React Native', 'Expo', 'iOS Apps', 'Android Apps',
              'Offline-First Sync', 'Supabase Integration', 'Zustand',
              'Push Notifications', 'OTA Updates', 'Figma to Code',
            ].map((item, i) => (
              <span key={i} className={i % 2 !== 0 ? 'ma-dot' : ''}>
                {i % 2 !== 0 ? '●' : item}
              </span>
            ))}
          </div>
        </div>

        {/* ═══ SERVICES ═══ */}
        <section className="ma-sec" id="ma-services">
          <div className="ma-w">
            <div className="ma-sec-head">
              <div className="ma-sec-eyebrow">What We Do</div>
              <h2>High-performance mobile solutions</h2>
              <p>We handle everything from initial design layouts to release management on the app stores.</p>
            </div>
          </div>
          <div className="ma-svc-grid">
            {[
              { num: '01', title: 'Custom App Design', desc: 'Crafting premium interactive prototypes and user flows in Figma. Tailored layouts optimized specifically for touch responsiveness.' },
              { num: '02', title: 'Cross-Platform Apps', desc: 'Single codebase delivering native performance on both iOS & Android. Fast deployment cycle using React Native & Expo.' },
              { num: '03', title: 'Offline-First Database', desc: 'Local databases that keep apps functional offline. Secure data storage that syncs automatically when connection is restored.' },
              { num: '04', title: 'Backend & API Setup', desc: 'Reliable integrations with Supabase, Firebase, or custom serverless backends. Scalable real-time messaging and databases.' },
              { num: '05', title: 'App Store Submission', desc: 'Complete publishing management for Apple App Store & Google Play Store. Handling guidelines compliance and optimization.' },
              { num: '06', title: 'OTA Updates & Support', desc: 'Push bug fixes, content, and stylesheet updates directly to users instantly without waiting for app store approval queues.' },
            ].map((s) => (
              <div className="ma-svc" key={s.num}>
                <div className="ma-svc-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ APPROACH ═══ */}
        <section className="ma-sec ma-sec-dark">
          <div className="ma-w">
            <div className="ma-approach">
              <div>
                <div className="ma-sec-head">
                  <div className="ma-sec-eyebrow">Our Approach</div>
                  <h2>Four phases. Native quality.</h2>
                </div>
                <div className="ma-approach-steps">
                  {[
                    { n: '1', title: 'Prototype', desc: 'Wireframe user journeys and design high-fidelity layouts in Figma. Test flows with interactive click-throughs.' },
                    { n: '2', title: 'Develop', desc: 'Build using React Native / Expo. Structured state management and responsive component architectures.' },
                    { n: '3', title: 'Test', desc: 'Test on physical devices (TestFlight / Google Play internal tracks). Verify offline modes, API load times, and performance.' },
                    { n: '4', title: 'Deploy', desc: 'Configure continuous deployment pipelines (Fastlane). Publish to the app stores and set up over-the-air updates.' },
                  ].map((step) => (
                    <div className="ma-a-step" key={step.n}>
                      <div className="ma-a-num">{step.n}</div>
                      <div>
                        <h4>{step.title}</h4>
                        <p>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ma-approach-visual">
                <div className="ma-av-big">60 FPS</div>
                <div className="ma-av-label">Target Animation Frame Rate</div>
                <div className="ma-av-row">
                  <div className="ma-av-item">
                    <div className="ma-av-n">20+</div>
                    <div className="ma-av-l">Apps</div>
                  </div>
                  <div className="ma-av-item">
                    <div className="ma-av-n">&lt;3wk</div>
                    <div className="ma-av-l">Initial MVP</div>
                  </div>
                  <div className="ma-av-item">
                    <div className="ma-av-n">99.9%</div>
                    <div className="ma-av-l">Uptime Sync</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ TECH STACK ═══ */}
        <section className="ma-sec ma-sec-light">
          <div className="ma-w">
            <div className="ma-sec-head ma-center">
              <div className="ma-sec-eyebrow">Technologies</div>
              <h2>Robust frameworks and deployment tools</h2>
            </div>
            <div className="ma-tech-row">
              {[
                'React Native', 'Expo SDK', 'Zustand', 'Supabase', 'Firebase',
                'SQLite', 'WatermelonDB', 'TestFlight', 'Google Play Console',
                'Fastlane', 'Xcode', 'Android Studio', 'Apple App Store Connect',
                'GitHub Actions', 'NativeWind', 'Lottie Animations'
              ].map((t) => (
                <div className="ma-tech-tag" key={t}>{t}</div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ WHY US ═══ */}
        <section className="ma-sec ma-sec-dark">
          <div className="ma-w">
            <div className="ma-sec-head ma-center">
              <div className="ma-sec-eyebrow">Why AnantaCode</div>
              <h2>What sets our mobile engineering apart</h2>
            </div>
            <div className="ma-diff-grid">
              {[
                { 
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                    </svg>
                  ),
                  title: 'Native-Grade Performance', 
                  desc: 'Using optimized UI threads, fast image caching, and vector components to guarantee silky smooth 60 FPS transitions and low memory usage.' 
                },
                { 
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
                    </svg>
                  ),
                  title: 'Instant OTA Updates', 
                  desc: 'Skip app store review queues for minor updates. We configure Expo Updates so bug patches and design modifications launch instantly.' 
                },
                { 
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  ),
                  title: 'Offline-First Sync', 
                  desc: 'We engineer local databases that allow your customers to use the app in low connectivity areas, syncing data back to the server seamlessly.' 
                },
                { 
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                  ),
                  title: 'Launch Guarantee', 
                  desc: 'We take complete responsibility for publishing, setting up meta descriptions, screenshots, App Store Connect policies, and Play Console compliance.' 
                },
              ].map((d) => (
                <div className="ma-diff" key={d.title}>
                  <div className="ma-diff-icon" style={{ color: '#8b5cf6' }}>{d.icon}</div>
                  <h3>{d.title}</h3>
                  <p>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CTA ═══ */}
        <section className="ma-cta-sec">
          <h2>Ready to build a premium mobile experience?</h2>
          <p>
            Get a free architecture consultation and scope breakdown for your iOS & Android app.
          </p>
          <Link to="/#contact" className="ma-btn-cta">
            Request Scope & Consultation
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
