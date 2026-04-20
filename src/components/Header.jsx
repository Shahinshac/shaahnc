import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Activity, Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const interval = setInterval(() => setCurrentTime(new Date().toLocaleTimeString()), 1000);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <header className={`cyber-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="system-branding">
          <Terminal className="sys-icon" size={20} />
          <span className="sys-name gradient-text">SHAHINSHA.OS</span>
        </div>

        <nav className="os-nav">
          <ul className="nav-links">
            <li><a href="#identity" className="nav-item">Identity</a></li>
            <li><a href="#workshop" className="nav-item">Workshop</a></li>
            <li><a href="#matrix" className="nav-item">Matrix</a></li>
          </ul>
        </nav>

        <div className="system-status">
          <div className="status-indicator">
            <Activity size={14} className="status-icon pulse-anim" />
            <span className="mono">SYST_ACTIVE</span>
          </div>
          <div className="system-time mono">{currentTime}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
