import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, Send } from 'lucide-react';
import { GithubIcon, XIcon, InstagramIcon, LinkedinIcon } from './Icons';
import { SITE_CONFIG } from '../config/siteConfig';
import './Contact.css';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = SITE_CONFIG.social.email;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-dot"></span>
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">CONTACT</h2>
          <p className="section-subtitle">
            Direct communication channels for engineering inquiries, software development, and technical collaboration.
          </p>
        </div>

        <div className="contact-layout-grid">
          {/* Main Direct Email Card / Final CTA */}
          <div className="direct-email-card card-base">
            <div className="email-card-badge mono">DIRECT CHANNEL</div>
            <h3 className="email-card-title">LET'S BUILD SOMETHING USEFUL.</h3>
            <p className="email-card-desc">
              Open to connecting around software development, projects, and learning opportunities.
            </p>

            <div className="email-address-box">
              <div className="email-icon-box">
                <Mail size={18} />
              </div>
              <span className="email-text mono">{email}</span>
              <button 
                className="copy-btn" 
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copied ? <Check size={16} className="copied-icon" /> : <Copy size={16} />}
                <span className="mono">{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            <div className="email-action-row">
              <a href={`mailto:${email}`} className="btn btn-primary">
                <Send size={16} /> Send Email
              </a>
            </div>
          </div>

          {/* Social Channels Column */}
          <div className="contact-channels-col">
            {/* GitHub Card */}
            <a 
              href={SITE_CONFIG.social.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="channel-card card-base"
              title="GitHub Profile"
            >
              <div className="channel-icon-box">
                <GithubIcon size={19} />
              </div>
              <div className="channel-info">
                <span className="channel-label mono">GITHUB</span>
                <span className="channel-val">github.com/{SITE_CONFIG.alias}</span>
              </div>
              <ExternalLink size={15} className="channel-arrow" />
            </a>

            {/* LinkedIn Card */}
            {SITE_CONFIG.social.linkedin && (
              <a 
                href={SITE_CONFIG.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="channel-card card-base"
                title="LinkedIn Profile"
                aria-label="View LinkedIn Profile"
              >
                <div className="channel-icon-box">
                  <LinkedinIcon size={19} />
                </div>
                <div className="channel-info">
                  <span className="channel-label mono">LINKEDIN</span>
                  <span className="channel-val">View LinkedIn Profile</span>
                </div>
                <ExternalLink size={15} className="channel-arrow" />
              </a>
            )}

            {/* X / Twitter Card */}
            <a 
              href={SITE_CONFIG.social.x} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="channel-card card-base"
              title="X Profile"
            >
              <div className="channel-icon-box">
                <XIcon size={16} />
              </div>
              <div className="channel-info">
                <span className="channel-label mono">X (TWITTER)</span>
                <span className="channel-val">{SITE_CONFIG.social.xHandle}</span>
              </div>
              <ExternalLink size={15} className="channel-arrow" />
            </a>

            {/* Instagram Card */}
            <a 
              href={SITE_CONFIG.social.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="channel-card card-base"
              title="Instagram Profile"
            >
              <div className="channel-icon-box">
                <InstagramIcon size={17} />
              </div>
              <div className="channel-info">
                <span className="channel-label mono">INSTAGRAM</span>
                <span className="channel-val">{SITE_CONFIG.social.instagramHandle}</span>
              </div>
              <ExternalLink size={15} className="channel-arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
