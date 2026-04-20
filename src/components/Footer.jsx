import React from 'react';
import { Mail, Phone, MapPin, Radio, Wifi } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="cyber-footer">
      <div className="container footer-layout">
        <div className="footer-signal grid-col">
          <h2 className="glitch gradient-text" data-text="SIG_INITIALIZE" style={{ marginBottom: '1rem' }}>
            SIG_INITIALIZE
          </h2>
          <p className="mono" style={{ opacity: 0.6, marginBottom: '2rem' }}>
            PENDING_COMMUNICATION_LINK_FOR_COLLABORATION
          </p>
          
          <div className="signal-status">
            <Radio size={16} className="pulse-anim" />
            <span className="mono">LISTENING_FOR_SIGNALS...</span>
          </div>
        </div>

        <div className="footer-contact grid-col">
          <div className="contact-frame">
            <div className="contact-item">
              <Mail className="contact-icon" size={18} />
              <div className="contact-data">
                <span className="mono label">MAIL:</span>
                <a href="mailto:shahinsha.c123@gmail.com" className="value">SHAHINSHA.C123@GMAIL.COM</a>
              </div>
            </div>
            
            <div className="contact-item">
              <Phone className="contact-icon" size={18} />
              <div className="contact-data">
                <span className="mono label">CELL:</span>
                <span className="value">+91 7594012761</span>
              </div>
            </div>

            <div className="contact-item">
              <MapPin className="contact-icon" size={18} />
              <div className="contact-data">
                <span className="mono label">LOC:</span>
                <span className="value">PERINTHALMANNA, IN</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-system-bar">
        <div className="container bar-content">
          <div className="mono bar-left">© 2026 SHAHINSHA_SYS_V2.0.4</div>
          <div className="bar-right">
            <div className="mono encryption-tag">
              <Wifi size={12} /> SECURE_PROTOCOL_TLS_1.3
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
