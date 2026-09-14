import React from 'react';
import { Mail, FolderGit2, MapPin, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon, XIcon, InstagramIcon } from './Icons';
import { SITE_CONFIG } from '../config/siteConfig';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">
        {/* Left Column: Hero Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-icon">
              <Terminal size={14} />
            </span>
            <span className="mono">Computer Science Engineering Student</span>
          </div>

          <h1 className="hero-name">
            SHAHIN SHA <br />
            <span className="hero-surname">CHAKKINGATHODI</span>
          </h1>

          <div className="hero-identity-row">
            <span className="hero-alias-badge mono">github.com/{SITE_CONFIG.alias}</span>
            <span className="hero-divider">•</span>
            <span className="hero-role">{SITE_CONFIG.role.toUpperCase()}</span>
          </div>

          <p className="hero-description">
            {SITE_CONFIG.description}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <FolderGit2 size={16} /> VIEW PROJECTS
            </a>
            <a href="#contact" className="btn btn-secondary">
              <Mail size={16} /> CONTACT ME
            </a>

            {/* Social Profile Links */}
            <div className="hero-social-links">
              <a
                href={SITE_CONFIG.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <GithubIcon size={17} />
              </a>
              {SITE_CONFIG.social.linkedin && (
                <a
                  href={SITE_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-icon hero-social-linkedin"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon size={17} />
                </a>
              )}
              <a
                href={SITE_CONFIG.social.x}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                aria-label="X Profile"
                title="X Profile"
              >
                <XIcon size={15} />
              </a>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                aria-label="Instagram Profile"
                title="Instagram Profile"
              >
                <InstagramIcon size={16} />
              </a>
            </div>
          </div>

          <div className="hero-footer-meta">
            <div className="meta-item">
              <MapPin size={14} className="meta-icon" />
              <span className="mono">{SITE_CONFIG.social.location}</span>
            </div>
            <div className="meta-divider">•</div>
            <div className="meta-tags">
              <span className="badge badge-cyan">TypeScript</span>
              <span className="badge badge-cyan">React</span>
              <span className="badge badge-indigo">Node.js</span>
              <span className="badge badge-indigo">PostgreSQL</span>
              <span className="badge">Docker</span>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Image & Tech Frame */}
        <div className="hero-visual">
          <div className="profile-frame">
            <div className="profile-glow"></div>
            <div className="profile-card">
              <img
                src="/profile.jpg"
                alt="Shahin Sha Chakkingathodi - Full-Stack Developer"
                className="profile-photo"
                loading="eager"
                fetchPriority="high"
                width="360"
                height="450"
              />
              <div className="profile-caption">
                <div className="caption-dot"></div>
                <div className="caption-info">
                  <span className="caption-title mono">SHAHIN SHA CHAKKINGATHODI</span>
                  <span className="caption-subtitle mono">@{SITE_CONFIG.alias} • FULL-STACK &amp; CLOUD</span>
                </div>
              </div>
            </div>
            
            {/* Precision Corner Brackets */}
            <div className="frame-corner corner-tl"></div>
            <div className="frame-corner corner-tr"></div>
            <div className="frame-corner corner-bl"></div>
            <div className="frame-corner corner-br"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
