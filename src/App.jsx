import React from 'react';
import { Download, Check, FileText, Clock, Film, Lock, Users } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <Clock className="logo-icon" />
            <span className="logo-text">Take Note Pro</span>
          </div>
          <nav className="nav">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="https://takenotepro.app" className="btn-web-app">Launch Web App</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Professional Timecode Logging for Film & TV</h1>
            <p className="hero-subtitle">
              Capture notes with precise timecode, export to industry-standard formats, and streamline your production workflow.
            </p>
            <div className="hero-ctas">
              <a href="https://apps.apple.com/app/take-note-pro" className="btn btn-primary">
                <Download size={20} />
                Download for iOS
              </a>
              <a href="https://takenotepro.app" className="btn btn-secondary">
                Try Web App
              </a>
            </div>
            <p className="hero-note">Free version available. Pro from £4.99/year.</p>
          </div>
          <div className="hero-image">
            <div className="app-mockup">
              {/* Placeholder for app screenshot */}
              <div className="mockup-screen">
                <div className="mockup-header">
                  <div className="mockup-time">09:30:15:12</div>
                  <div className="mockup-rec">● REC</div>
                </div>
                <div className="mockup-notes">
                  <div className="mockup-note">
                    <div className="note-time">09:30:15:12</div>
                    <div className="note-text">Great take - perfect delivery</div>
                  </div>
                  <div className="mockup-note">
                    <div className="note-time">09:32:08:03</div>
                    <div className="note-text">Check sound levels on this one</div>
                  </div>
                  <div className="mockup-note">
                    <div className="note-time">09:35:42:18</div>
                    <div className="note-text">Director's pick - use this take</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="social-proof">
        <div className="container">
          <p className="social-proof-text">
            Trusted by sound recordists, script supervisors, and production teams worldwide
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2>Everything You Need on Set</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">
                <Clock />
              </div>
              <h3>Precise Timecode</h3>
              <p>Log notes with frame-accurate timecode in any format (23.976, 24, 25, 29.97, 30fps)</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <Film />
              </div>
              <h3>NLE Integration</h3>
              <p>Export markers directly to Avid, Premiere, Final Cut Pro, and DaVinci Resolve</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <FileText />
              </div>
              <h3>Professional PDFs</h3>
              <p>Generate detailed session reports with optional password protection</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <Lock />
              </div>
              <h3>Secure & Private</h3>
              <p>All data stored locally on your device. No cloud required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="use-cases">
        <div className="container">
          <h2>Perfect For</h2>
          <div className="use-cases-grid">
            <div className="use-case">
              <h3>🎙️ Sound Recordists</h3>
              <p>Log mic issues, ADR needs, and wild lines with precise timecode</p>
            </div>
            <div className="use-case">
              <h3>📝 Script Supervisors</h3>
              <p>Track continuity notes, line changes, and director's picks</p>
            </div>
            <div className="use-case">
              <h3>🎬 Directors & ADs</h3>
              <p>Mark favorite takes and flag scenes for review in post</p>
            </div>
            <div className="use-case">
              <h3>✂️ Editors</h3>
              <p>Import markers directly into your NLE for instant reference</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <h2>Simple, Transparent Pricing</h2>
          <div className="pricing-grid">
            {/* Free Plan */}
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>Free</h3>
                <div className="price">£0</div>
                <p className="price-period">Forever</p>
              </div>
              <ul className="pricing-features">
                <li><Check size={20} /> 1 active session</li>
                <li><Check size={20} /> Up to 20 notes per session</li>
                <li><Check size={20} /> Basic PDF export</li>
                <li><Check size={20} /> All timecode formats</li>
                <li><Check size={20} /> Offline-first</li>
              </ul>
              <a href="https://apps.apple.com/app/take-note-pro" className="btn btn-outline">
                Download Free
              </a>
            </div>

            {/* Pro Plan */}
            <div className="pricing-card pricing-card-featured">
              <div className="pricing-badge">Most Popular</div>
              <div className="pricing-header">
                <h3>Pro</h3>
                <div className="price">£4.99</div>
                <p className="price-period">per year</p>
              </div>
              <ul className="pricing-features">
                <li><Check size={20} /> <strong>Unlimited sessions</strong></li>
                <li><Check size={20} /> <strong>Unlimited notes</strong></li>
                <li><Check size={20} /> <strong>Document upload & reference</strong></li>
                <li><Check size={20} /> <strong>NLE marker export</strong> (EDL, FCPXML, TSV, ALE)</li>
                <li><Check size={20} /> <strong>Password-protected PDFs</strong></li>
                <li><Check size={20} /> Priority support</li>
              </ul>
              <a href="https://apps.apple.com/app/take-note-pro" className="btn btn-primary">
                Start Pro Trial
              </a>
              <p className="pricing-note">7-day free trial included</p>
            </div>

            {/* Team Plan - Coming Soon */}
            <div className="pricing-card pricing-card-disabled">
              <div className="pricing-header">
                <h3>Team</h3>
                <div className="price">£29.99</div>
                <p className="price-period">per year</p>
              </div>
              <ul className="pricing-features">
                <li><Check size={20} /> Everything in Pro</li>
                <li><Check size={20} /> Shared sessions</li>
                <li><Check size={20} /> Team collaboration</li>
                <li><Check size={20} /> Priority support</li>
              </ul>
              <button className="btn btn-outline" disabled>
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Streamline Your Workflow?</h2>
          <p>Join production teams who trust Take Note Pro for professional timecode logging</p>
          <div className="cta-buttons">
            <a href="https://apps.apple.com/app/take-note-pro" className="btn btn-primary btn-large">
              <Download size={24} />
              Download for iOS
            </a>
            <a href="https://takenotepro.app" className="btn btn-secondary btn-large">
              Try Web App
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <Clock className="logo-icon" />
              <span className="logo-text">Take Note Pro</span>
            </div>
            <div className="footer-links">
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="https://takenotepro.app">Web App</a>
              <a href="mailto:support@takenote.pro">Support</a>
            </div>
            <div className="footer-legal">
              <p>&copy; 2025 Take Note Pro. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
