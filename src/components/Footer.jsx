import React from 'react';
import { ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-left">
          <span className="footer-brand">{SITE_CONFIG.name.toUpperCase()}</span>
          <p className="footer-tagline">
            {SITE_CONFIG.role}
          </p>
          <span className="footer-copy mono">
            &copy; {currentYear} {SITE_CONFIG.name.toUpperCase()}
          </span>
        </div>

        <div className="footer-right">
          <div className="footer-social-links">
            <a 
              href={SITE_CONFIG.social.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
            >
              GitHub
            </a>
            {SITE_CONFIG.social.linkedin && (
              <a 
                href={SITE_CONFIG.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-link"
              >
                LinkedIn
              </a>
            )}
            <a 
              href={SITE_CONFIG.social.x} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
            >
              X
            </a>
            <a 
              href={SITE_CONFIG.social.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
            >
              Instagram
            </a>
          </div>

          <div className="footer-nav-links">
            <a href="#home" className="footer-nav-item">Home</a>
            <a href="#about" className="footer-nav-item">About</a>
            <a href="#projects" className="footer-nav-item">Projects</a>
            <a href="#skills" className="footer-nav-item">Skills</a>
            <a href="#contact" className="footer-nav-item">Contact</a>
            
            <button 
              onClick={scrollToTop} 
              className="back-to-top-btn"
              aria-label="Back to top of page"
            >
              <span className="mono">Back to top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
