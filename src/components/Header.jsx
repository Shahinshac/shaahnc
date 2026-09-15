import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { SITE_CONFIG } from '../config/siteConfig';
import './Header.css';

const navItems = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'approach', label: 'Approach', href: '#approach' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Determine active section
      const sections = ['home', 'about', 'projects', 'approach', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
            <Terminal size={15} />
          </div>
          <span className="brand-name">
            SHAHIN SHA <span className="brand-dot"></span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={item.href} 
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                  {activeSection === item.id && <span className="active-dot"></span>}
                </a>
              </li>
            ))}
            <li>
              <a 
                href={SITE_CONFIG.social.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="nav-link nav-link-external"
                title="GitHub Profile"
              >
                GitHub <ExternalLink size={12} className="nav-ext-icon" />
              </a>
            </li>
          </ul>
        </nav>

        {/* Right Actions: Status & Quick Social Icons */}
        <div className="nav-right">
          <div className="status-pill" title="Currently learning Cloud & DevOps">
            <span className="status-dot"></span>
            <span className="status-text mono">Learning Cloud &amp; DevOps</span>
          </div>

          <a
            href={SITE_CONFIG.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-social-btn"
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <GithubIcon size={17} />
          </a>

          {SITE_CONFIG.social.linkedin && (
            <a
              href={SITE_CONFIG.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social-btn"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedinIcon size={17} />
            </a>
          )}

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <a 
                href={item.href} 
                onClick={handleNavClick} 
                className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a 
              href={SITE_CONFIG.social.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="mobile-nav-link"
            >
              GitHub <ExternalLink size={14} style={{ display: 'inline', verticalAlign: 'middle' }} />
            </a>
          </li>
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
