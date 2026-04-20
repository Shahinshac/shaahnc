import React, { useState, useEffect } from 'react';
import { Shield, ChevronRight, Hash, Cpu } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "SHAHINSHA CHAKKINGATHODI // DATA_ARCHITECT";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="identity-module" id="identity">
      <div className="container hero-layout">
        <div className="profile-hex-container">
          <div className="scan-line"></div>
          <img src="/profile.jpg" alt="Identity" className="profile-identity" />
          <div className="frame-decoration top-left"></div>
          <div className="frame-decoration bottom-right"></div>
        </div>

        <div className="identity-data">
          <div className="mono data-header">
            <Cpu size={14} /> SYS_LOGIN: RECOGNIZED
          </div>
          
          <h1 className="glitch identity-name" data-text={displayText}>
            {displayText}
          </h1>
          
          <div className="identity-bio">
            <p>
              2ND YEAR CSE STUDENT @ MEA ENGINEERING COLLEGE. <br/>
              SPECIALIZING IN FULL-STACK SYSTEMS & CLOUD ARCHITECTURE. <br/>
              CURRENT STATUS: <span className="status-highlight">PROMPTING_FOR_INNOVATION</span>
            </p>
          </div>

          <div className="identity-actions">
            <a href="#workshop" className="btn-cyber">
              INITIALIZE_WORKSHOP <ChevronRight size={18} />
            </a>
            <div className="identity-meta mono">
              <span className="meta-tag">#NODE_JS</span>
              <span className="meta-tag">#REACT</span>
              <span className="meta-tag">#ARCHITECTURE</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="module-footer container">
        <div className="footer-line"></div>
        <div className="mono footer-metadata">
          SECURE_CONNECTION: ESTABLISHED | LOCATION: PERINTHALMANNA, IN
        </div>
      </div>
    </section>
  );
};

export default Hero;
