import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const observerRef = useRef(null);

  useEffect(() => {
    // Intersection observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.fade-in').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="container header-inner">
          <a href="/" className="logo">
            <div className="logo">
  <img src="/takenote-icon.png" alt="Take Note Pro" className="logo-icon" />
</div>
            <span className="logo-text">Take Note <span className="logo-accent">Pro</span></span>
          </a>
          <nav className="nav">
            <a href="#features" className="nav-link">Features</a>
            {/* <a href="#pricing" className="nav-link">Pricing</a> */}
            <a href="#export" className="nav-link">Export</a>
            <a href="https://takenotepro.app" className="btn-cta-small">Launch App</a>
          </nav>
          <button className="mobile-menu-btn" onClick={() => {
            document.querySelector('.mobile-nav').classList.toggle('open');
          }}>
            <span></span><span></span><span></span>
          </button>
        </div>
        <div className="mobile-nav">
          <a href="#features" className="nav-link">Features</a>
          {/* <a href="#pricing" className="nav-link">Pricing</a> */}
          <a href="#export" className="nav-link">Export</a>
          <a href="https://takenotepro.app" className="btn-cta-small">Launch App</a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-glow"></div>
        <div className="hero-grid"></div>
        <div className="container hero-content">
          <div className="hero-badge fade-in">
            <span className="badge-dot"></span>
            <span className="badge-text">Built for production professionals</span>
          </div>
          <h1 className="hero-title fade-in">
            Professional Timecode<br/>
            Logging for <span className="text-accent">Film & TV</span>
          </h1>
          <p className="hero-subtitle fade-in">
            Capture notes that sync with production timecode. Export to industry-standard formats.
            Built by a working sound recordist for real production workflows.
          </p>
          <div className="hero-ctas fade-in">
            <a href="https://takenotepro.app" className="btn btn-primary">
              <span>Launch Web App</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#features" className="btn btn-ghost">
              <span>See Features</span>
            </a>
          </div>
          <div className="hero-stats fade-in">
            <div className="stat">
              <span className="stat-value">Supports All Frame Rates</span>
              <span className="stat-label">23.976, 24, 25, 29.97DF, 30, 50, 59.94, 60</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-value">CSV/NLE</span>
              <span className="stat-label">Export Formats</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-value">Mic List</span>
              <span className="stat-label">PDF export with photos</span>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview */}
      <section className="app-preview">
        <div className="container">
          <div className="preview-window fade-in">
            <div className="preview-titlebar">
              <div className="preview-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="preview-url">takenotepro.app</span>
            </div>
            <div className="preview-screen">
              <div className="mock-app">
                <div className="mock-header">
                  <div className="mock-logo">Take Note <span>Pro</span></div>
                  <div className="mock-tc">10:23:32:12</div>
                </div>
                <div className="mock-session-bar">
                  <span className="mock-session-name">Session: INT. STUDIO — Day 3</span>
                  <span className="mock-running">
                    <span className="running-dot"></span>
                    Running
                  </span>
                </div>
                <div className="mock-notes">
                  <div className="mock-note">
                    <span className="mock-note-tc">11:22:15:08</span>
                    <div className="mock-note-content">
                      <span className="mock-note-text">Use boom for this take</span>
                      <span className="mock-note-meta">Quick Note · Boom Op</span>
                    </div>
                  </div>
                  <div className="mock-note">
                    <span className="mock-note-tc">12:15:02:18</span>
                    <div className="mock-note-content">
                      <span className="mock-note-text">Wild track — room tone 30 sec</span>
                      <span className="mock-note-meta">Quick Note · Sound</span>
                    </div>
                  </div>
                  <div className="mock-note">
                    <span className="mock-note-tc">15:23:30:04</span>
                    <div className="mock-note-content">
                      <span className="mock-note-text">This take prefered by the director</span>
                      <span className="mock-note-meta">Quick Note · Sound</span>
                    </div>
                  </div>
                </div>
                <div className="mock-input-bar">
                  <span className="mock-input-placeholder">Add a note...</span>
                  <span className="mock-input-btn">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-header fade-in">
            <span className="section-tag">Features</span>
            <h2 className="section-title">Everything you need on set</h2>
            <p className="section-subtitle">Purpose-built tools for sound recordists, loggers, and production teams.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card fade-in">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#00ff88" strokeWidth="1.5"/><polyline points="12,6 12,12 16,14" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3>Running Timecode</h3>
              <p>Real-time timecode display synced to your session. Set start time and frame rate, then capture notes at precise moments.</p>
            </div>

            <div className="feature-card fade-in">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><polyline points="14,2 14,8 20,8" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3>Session Management</h3>
              <p>Organise notes by shoot day, scene, or setup. Each session tracks its own log, metadata, and mic list.</p>
            </div>

            <div className="feature-card fade-in">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" stroke="#00ff88" strokeWidth="1.5"/><path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round"/><line x1="12" y1="19" x2="12" y2="23" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <h3>Mic List & Metadata</h3>
              <p>Track your mic setup with names, types, and even photo references. Custom metadata fields for any production requirement.</p>
            </div>

            <div className="feature-card fade-in">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><polyline points="7,10 12,15 17,10" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><line x1="12" y1="15" x2="12" y2="3" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <h3>Industry Exports</h3>
              <p>Export as CSV, PDF reports, or NLE-ready markers for Avid, Premiere, and DaVinci Resolve. Share via email or AirDrop.</p>
            </div>

            <div className="feature-card fade-in">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" stroke="#00ff88" strokeWidth="1.5"/><line x1="8" y1="21" x2="16" y2="21" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round"/><line x1="12" y1="17" x2="12" y2="21" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <h3>Web & Mobile</h3>
              <p>Works in your browser — no install required. Use on your phone, tablet, or laptop. Your notes sync across devices.</p>
            </div>

            <div className="feature-card fade-in">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" stroke="#00ff88" strokeWidth="1.5"/><path d="M13 2v7h7" stroke="#00ff88" strokeWidth="1.5"/></svg>
              </div>
              <h3>Document Upload</h3>
              <p>Attach call sheets, scripts, and reference PDFs directly to your session. Everything in one place, accessible on set.</p>
            </div>
          </div>
        </div>
     
      </section>

      {/* Export Section */}
      <section className="export-section" id="export">
        <div className="container">
          <div className="section-header fade-in">
            <span className="section-tag">Export</span>
            <h2 className="section-title">Straight into the edit</h2>
            <p className="section-subtitle">Export formats that work with industry-standard editing software.</p>
          </div>
          <div className="export-grid fade-in">
            <div className="export-card">
              <div className="export-format">CSV</div>
              <h4>Spreadsheet / General</h4>
              <p>Compatible with Excel, Google Sheets, and any CSV reader. Clean, structured data.</p>
            </div>
            <div className="export-card">
              <div className="export-format">PDF</div>
              <h4>Mic List</h4>
              <p>Professional PDF export with radio mic channels, names, photos and even timecode stamped person changes.</p>
            </div>
            <div className="export-card highlight">
              <div className="export-format">NLE</div>
              <h4>Avid / Premiere / Resolve</h4>
              <p>Timecode markers ready to import directly into your edit timeline.</p>
              {/* <span className="pro-badge">PRO</span> */}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing
      <section className="pricing" id="pricing">
        <div className="container">
          <div className="section-header fade-in">
            <span className="section-tag">Pricing</span>
            <h2 className="section-title">Simple, affordable pricing</h2>
            <p className="section-subtitle">Start free. Upgrade when you need more.</p>
          </div>

          <div className="pricing-grid fade-in">
            <div className="pricing-card">
              <div className="pricing-tier">Free</div>
              <div className="pricing-amount">
                <span className="price">£0</span>
                <span className="period">forever</span>
              </div>
              <ul className="pricing-features">
                <li><span className="check">✓</span> Unlimited Sessions</li>
                <li><span className="check">✓</span> Unlimited Notes</li>
                <li><span className="check">✓</span> Running timecode</li>
                <li><span className="check">✓</span> CSV export</li>
                <li><span className="check">✓</span> PDF export</li>
              </ul>
              <a href="https://takenotepro.app" className="btn btn-outline">Get Started</a>
            </div>

            <div className="pricing-card featured">
              <div className="pricing-popular">Most Popular</div>
              <div className="pricing-tier">Pro</div>
              <div className="pricing-amount">
                <span className="price">£4.99</span>
                <span className="period">/year</span>
              </div>
              <ul className="pricing-features">
                <li><span className="check accent">✓</span> Unlimited sessions</li>
                <li><span className="check accent">✓</span> Unlimited notes</li>
                <li><span className="check accent">✓</span> Running timecode</li>
                <li><span className="check accent">✓</span> CSV & PDF export</li>
                <li><span className="check accent">✓</span> NLE exports (Avid, Premiere, Resolve)</li>
                <li><span className="check accent">✓</span> Document upload</li>
                <li><span className="check accent">✓</span> Cloud sync</li>
              </ul>
              <a href="https://takenotepro.app" className="btn btn-primary">Start Pro</a>
            </div>
          </div>
        </div>
      </section> */}

      {/* Who It's For */}
      <section className="audience">
        <div className="container">
          <div className="section-header fade-in">
            <span className="section-tag">Built For</span>
            <h2 className="section-title">Made for production professionals</h2>
          </div>
          <div className="audience-grid fade-in">
            <div className="audience-card">
              <div className="audience-role">Sound Recordists & assistants</div>
              <p>Log notes, and document mic logs. Built by one of you.</p>
            </div>
            <div className="audience-card">
              <div className="audience-role">Script Supervisors</div>
              <p>Track continuity notes with precise timecode. Export clean reports for post.</p>
            </div>
            <div className="audience-card">
              <div className="audience-role">TV Loggers</div>
              <p>Fast timecode logging for live events, galleries, and multi-camera shoots.</p>
            </div>
            <div className="audience-card">
              <div className="audience-role">Producers & ADs</div>
              <p>Keep a timestamped record of the shoot day. Review notes from anywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta">
        <div className="container fade-in">
          <div className="cta-glow"></div>
          <h2>Ready to streamline your workflow?</h2>
          <p>Start logging timecoded notes in seconds. No download required.</p>
          <a href="https://takenotepro.app" className="btn btn-primary btn-lg">
            <span>Launch Take Note Pro</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <div className="logo">
              <div className="footer-brand">
  <img src="/takenote-icon.png" alt="Take Note Pro" className="logo-icon" />
</div>
              <span className="logo-text">Take Note <span className="logo-accent">Pro</span></span>
            </div>
            <p className="footer-tagline">Professional timecode logging for film & TV production.</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Product</h4>
              <a href="#features">Features</a>
              {/* <a href="#pricing">Pricing</a> */}
              <a href="#export">Exports</a>
            </div>
            <div className="footer-col">
              <h4>App</h4>
              <a href="https://takenotepro.app">Web App</a>
              <a href="https://takenotepro.app">Sign In</a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} Take Note Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
