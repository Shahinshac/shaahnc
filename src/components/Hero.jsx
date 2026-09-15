import React from 'react';
import { FolderGit2, MapPin, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, XIcon, InstagramIcon } from './Icons';
import { SITE_CONFIG } from '../config/siteConfig';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">
        {/* Left Column: Hero Content */}
        <div className="hero-content">
          {/* Status Indicator: Currently Learning */}
          <div className="hero-learning-status" aria-label="Learning status">
            <span className="status-indicator-dot"></span>
            <span className="mono status-label">CURRENTLY LEARNING</span>
            <span className="status-separator">•</span>
            <span className="mono status-topic">Cloud &amp; DevOps</span>
          </div>

          <h1 className="hero-name">
            SHAHIN SHA <br />
            <span className="hero-surname">CHAKKINGATHODI</span>
          </h1>

          <div className="hero-roles-container">
            <span className="hero-primary-role">Full-Stack Developer</span>
            <span className="hero-role-bullet">•</span>
            <span className="hero-secondary-role">B.Tech Computer Science Student</span>
          </div>

          <p className="hero-description">
            Building practical full-stack applications and exploring Cloud &amp; DevOps.
          </p>

          <div className="hero-actions">
            {/* Primary CTA */}
            <a href="#projects" className="btn btn-primary">
              <FolderGit2 size={16} /> View Projects
            </a>

            {/* Secondary CTA */}
            <a 
              href={SITE_CONFIG.social.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              <GithubIcon size={16} /> GitHub
            </a>

            {/* Subtle Contact / Let's Connect Action */}
            <a href="#contact" className="btn btn-ghost-connect">
              <MessageSquare size={15} /> Let's Connect
            </a>
          </div>

          {/* Social Icons Strip */}
          <div className="hero-social-strip">
            <span className="social-strip-label mono">PROFILES</span>
            <div className="hero-social-links">
              <a
                href={SITE_CONFIG.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GithubIcon size={16} />
              </a>
              {SITE_CONFIG.social.linkedin && (
                <a
                  href={SITE_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-icon hero-social-linkedin"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <LinkedinIcon size={16} />
                </a>
              )}
              <a
                href={SITE_CONFIG.social.x}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                aria-label="X (Twitter) Profile"
                title="X"
              >
                <XIcon size={14} />
              </a>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                aria-label="Instagram Profile"
                title="Instagram"
              >
                <InstagramIcon size={15} />
              </a>
            </div>
          </div>

          {/* Location & Quick Stack Meta */}
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
