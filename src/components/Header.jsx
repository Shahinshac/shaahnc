import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { SITE_CONFIG } from '../config/siteConfig';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand / Logo */}
        <a href="#home" className="nav-brand">
          <div className="brand-badge">
            <Terminal size={16} />
          </div>
          <span className="brand-name">
            SHAHIN SHA <span className="brand-dot"></span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-menu">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>

        {/* Right Actions: Status, GitHub & LinkedIn */}
        <div className="nav-right">
          <div className="status-pill" title="Open to projects, internships, and collaborations">
            <span className="status-dot"></span>
            <span className="status-text mono">Available for roles</span>
          </div>

          <a
            href={SITE_CONFIG.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social-btn"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={18} />
          </a>

          {SITE_CONFIG.social.linkedin && (
            <a
              href={SITE_CONFIG.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social-btn"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-menu">
          <li><a href="#home" onClick={handleNavClick} className="mobile-nav-link">Home</a></li>
          <li><a href="#about" onClick={handleNavClick} className="mobile-nav-link">About</a></li>
          <li><a href="#projects" onClick={handleNavClick} className="mobile-nav-link">Projects</a></li>
          <li><a href="#skills" onClick={handleNavClick} className="mobile-nav-link">Skills</a></li>
          <li><a href="#contact" onClick={handleNavClick} className="mobile-nav-link">Contact</a></li>
          <li className="mobile-nav-divider"></li>
          <li style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <a
              href={SITE_CONFIG.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary mobile-github-link"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} /> GitHub Profile
            </a>
            {SITE_CONFIG.social.linkedin && (
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary mobile-github-link"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={16} /> LinkedIn Profile
              </a>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
