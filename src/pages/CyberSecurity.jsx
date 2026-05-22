import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardNav from '../components/CardNav';
import Footer from '../components/Footer';
import './CyberSecurity.css';

export default function CyberSecurity() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CardNav />

      <main>
        {/* ═══ HERO ═══ */}
        <section className="cs-hero">
          <div className="cs-hero-bg-blob" />
          <div className="cs-hero-line" />
          <div className="cs-w">
            <div className="cs-hero-grid">
              <div className="cs-hero-left">
                <div className="cs-eyebrow">Cyber Security Services</div>
                <h1>We don't just find vulnerabilities. We eliminate them.</h1>
                <p>
                  End-to-end security for web applications, APIs, cloud
                  infrastructure and networks. Powered by AI-driven threat
                  intelligence.
                </p>
                <div className="cs-hero-cta">
                  <Link to="/contact" className="cs-btn cs-btn-r">
                    Get Security Audit
                  </Link>
                  <a href="#cs-services" className="cs-btn cs-btn-w">
                    Our Services
                  </a>
                </div>
              </div>

              <div className="cs-hero-right">
                <div className="cs-terminal">
                  <span className="cs-bl">$</span> brahmastra{' '}
                  <span className="cs-yl">--scan</span> target.com
                  <br />
                  <span className="cs-gr">[+]</span> Scanning 2,847
                  endpoints...
                  <br />
                  <span className="cs-gr">[+]</span> SQL Injection found:{' '}
                  <span className="cs-hl">/api/users?id=1'</span>
                  <br />
                  <span className="cs-gr">[+]</span> XSS reflected:{' '}
                  <span className="cs-hl">/search?q=&lt;script&gt;</span>
                  <br />
                  <span className="cs-gr">[+]</span> Open port:{' '}
                  <span className="cs-yl">22 (SSH)</span> weak key
                  <br />
                  <span className="cs-gr">[+]</span> CORS misconfigured:{' '}
                  <span className="cs-hl">*.example.com</span>
                  <br />
                  <span className="cs-gr">[✓]</span>{' '}
                  <span className="cs-gr">
                    Report generated. 14 critical, 8 high.
                  </span>
                </div>
                <div className="cs-stat-row">
                  <div className="cs-stat">
                    <div className="cs-stat-n">500+</div>
                    <div className="cs-stat-l">Audits done</div>
                  </div>
                  <div className="cs-stat">
                    <div className="cs-stat-n">98%</div>
                    <div className="cs-stat-l">Threat detection</div>
                  </div>
                  <div className="cs-stat">
                    <div className="cs-stat-n">24/7</div>
                    <div className="cs-stat-l">Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ MARQUEE ═══ */}
        <div className="cs-marquee">
          <div className="cs-marquee-inner">
            {[
              'OWASP Top 10', 'VAPT', 'Penetration Testing', 'SOC Monitoring',
              'Incident Response', 'Cloud Security', 'API Security',
              'Compliance (ISO 27001)', 'DPDP Act', 'Threat Intelligence',
              'OWASP Top 10', 'VAPT', 'Penetration Testing', 'SOC Monitoring',
              'Incident Response', 'Cloud Security', 'API Security',
              'Compliance (ISO 27001)', 'DPDP Act', 'Threat Intelligence',
            ].map((item, i) => (
              <span key={i} className={i % 2 !== 0 ? 'cs-dot' : ''}>
                {i % 2 !== 0 ? '●' : item}
              </span>
            ))}
          </div>
        </div>

        {/* ═══ SERVICES ═══ */}
        <section className="cs-sec" id="cs-services">
          <div className="cs-w">
            <div className="cs-sec-head">
              <div className="cs-sec-eyebrow">What We Do</div>
              <h2>Security services built for modern infrastructure</h2>
              <p>From code to cloud, we cover every layer of your digital stack.</p>
            </div>
          </div>
          <div className="cs-svc-grid">
            {[
              { num: '01', title: 'VAPT', desc: 'Vulnerability Assessment and Penetration Testing across web apps, mobile apps and network infrastructure. Detailed reports with remediation steps.' },
              { num: '02', title: 'Web Application Firewall', desc: 'AI-powered WAF that blocks SQL Injection, XSS, DDoS and zero-day attacks in real-time. Powered by our Brahmastra engine.' },
              { num: '03', title: 'Threat Monitoring', desc: '24/7 continuous monitoring of your servers, APIs and endpoints. Instant alerts via WhatsApp and email when threats are detected.' },
              { num: '04', title: 'Cloud Security', desc: 'Security hardening for AWS, Azure and GCP. IAM audit, S3 bucket policies, security group review and infrastructure-as-code scanning.' },
              { num: '05', title: 'Compliance & Audit', desc: 'DPDP Act, ISO 27001, SOC 2 and PCI-DSS compliance assessments. Audit-ready documentation and gap analysis reports.' },
              { num: '06', title: 'Incident Response', desc: 'Rapid response team for active breaches. Forensic analysis, containment, evidence preservation and recovery within 4 hours SLA.' },
            ].map((s) => (
              <div className="cs-svc" key={s.num}>
                <div className="cs-svc-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ APPROACH ═══ */}
        <section className="cs-sec cs-sec-dark">
          <div className="cs-w">
            <div className="cs-approach">
              <div>
                <div className="cs-sec-head">
                  <div className="cs-sec-eyebrow">Our Approach</div>
                  <h2>Four phases. Zero blind spots.</h2>
                </div>
                <div className="cs-approach-steps">
                  {[
                    { n: '1', title: 'Discover', desc: 'Map your entire attack surface — domains, subdomains, APIs, ports, cloud assets. Find what you didn\'t know existed.' },
                    { n: '2', title: 'Assess', desc: 'Run automated and manual penetration tests. Simulate real attacker behavior. Identify every vulnerability.' },
                    { n: '3', title: 'Protect', desc: 'Deploy WAF rules, harden configurations, patch vulnerabilities. Set up continuous monitoring and alerting.' },
                    { n: '4', title: 'Respond', desc: 'Incident playbooks, evidence collection, legal-ready reports. 24/7 SOC coverage with 4-hour response SLA.' },
                  ].map((step) => (
                    <div className="cs-a-step" key={step.n}>
                      <div className="cs-a-num">{step.n}</div>
                      <div>
                        <h4>{step.title}</h4>
                        <p>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="cs-approach-visual">
                <div className="cs-av-big">98%</div>
                <div className="cs-av-label">Threat Detection Accuracy</div>
                <div className="cs-av-row">
                  <div className="cs-av-item">
                    <div className="cs-av-n">500+</div>
                    <div className="cs-av-l">Audits</div>
                  </div>
                  <div className="cs-av-item">
                    <div className="cs-av-n">&lt;4hr</div>
                    <div className="cs-av-l">Response SLA</div>
                  </div>
                  <div className="cs-av-item">
                    <div className="cs-av-n">0</div>
                    <div className="cs-av-l">Data breaches</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ TECH STACK ═══ */}
        <section className="cs-sec cs-sec-light">
          <div className="cs-w">
            <div className="cs-sec-head cs-center">
              <div className="cs-sec-eyebrow">Technologies</div>
              <h2>Tools and frameworks we work with</h2>
            </div>
            <div className="cs-tech-row">
              {[
                'Burp Suite', 'Nmap', 'Metasploit', 'OWASP ZAP', 'Nikto',
                'Wireshark', 'Brahmastra AI', 'Kali Linux', 'AWS Security Hub',
                'Cloudflare', 'Snort', 'Suricata', 'OpenVAS',
                'Hashicorp Vault', 'Terraform', 'Docker Security',
              ].map((t) => (
                <div className="cs-tech-tag" key={t}>{t}</div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ WHY US ═══ */}
        <section className="cs-sec cs-sec-dark">
          <div className="cs-w">
            <div className="cs-sec-head cs-center">
              <div className="cs-sec-eyebrow">Why AnantaCode</div>
              <h2>What separates us from the rest</h2>
            </div>
            <div className="cs-diff-grid">
              {[
                { icon: '⚡', title: 'AI-Powered Detection', desc: 'Our Brahmastra engine uses 8-feature AI classification to detect attacks that rule-based systems miss. Trained on real-world Indian traffic patterns.' },
                { icon: '📜', title: 'Legal-Ready Evidence', desc: 'Every incident generates court-admissible evidence packages formatted for IT Act Sections 43A, 66 and 72A. One click to generate FIR documentation.' },
                { icon: '🇮🇳', title: 'Data Stays in India', desc: 'All processing happens on Indian infrastructure. DPDP Act compliant from day one. Your data never crosses Indian borders.' },
                { icon: '💬', title: 'Reports You Understand', desc: 'Security reports in Hindi, Gujarati, Marathi and English. No jargon walls. Your team actually understands what happened and what to do.' },
              ].map((d) => (
                <div className="cs-diff" key={d.title}>
                  <div className="cs-diff-icon">{d.icon}</div>
                  <h3>{d.title}</h3>
                  <p>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CTA ═══ */}
        <section className="cs-cta-sec">
          <h2>Your business is only as secure as your weakest endpoint.</h2>
          <p>
            Get a free security assessment of your web application. No
            commitment, no fluff.
          </p>
          <Link to="/contact" className="cs-btn-cta">
            Request Free Audit
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
