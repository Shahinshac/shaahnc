import React from 'react';
import { Mail, MapPin, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content glass-panel">
          <div className="footer-info">
            <h2>Let's Build Something <span className="gradient-text">Amazing</span></h2>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
            
            <div className="contact-details">
              <a href="mailto:shahinsha.c123@gmail.com" className="contact-item">
                <Mail className="contact-icon" />
                <span>shahinsha.c123@gmail.com</span>
              </a>
              <div className="contact-item">
                <span className="contact-icon" style={{fontWeight: 'bold'}}>📞</span>
                <span>+91 7594012761</span>
              </div>
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <span>MEA Engineering College, Perinthalmanna</span>
              </div>
            </div>
          </div>
          
          <div className="footer-form">
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" className="form-input" required />
              <input type="email" placeholder="Your Email" className="form-input" required />
              <textarea placeholder="Your Message" rows="4" className="form-input" required></textarea>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            Designed & Built with <Heart size={14} className="heart-icon" /> by Shahin Sha Chakkingathodi © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
