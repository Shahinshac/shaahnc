import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import './Hero.css';

const GithubIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Decorative background elements */}
      <div className="hero-glow shape-1"></div>
      <div className="hero-glow shape-2"></div>
      
      <div className="container hero-container animate-fade-in">
        <div className="hero-content">
          <div className="hero-profile">
            <img src="/profile.jpg" alt="Shahin Sha" className="profile-img" onError={(e) => { e.target.style.display = 'none' }} />
          </div>
          
          <div className="badge glass-panel">
            <span className="badge-dot"></span> Available for Web Development Roles
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <br />
            <span className="gradient-text">Shahin Sha</span>
            <span className="surname"> Chakkingathodi</span>
          </h1>
          
          <p className="hero-subtitle">
            2nd Year CSE Student @ MEA Engineering College <br/> 
            Passionate Full-Stack Developer creating stunning & high-performance digital experiences.
          </p>
          
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={20} />
            </a>
            <a href="mailto:shahinsha.c123@gmail.com" className="btn btn-outline">
              Get In Touch <Mail size={20} />
            </a>
          </div>
          
          <div className="hero-socials">
            <a href="https://github.com/Shahinshac" target="_blank" rel="noreferrer" className="social-icon glass-panel" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
            <a href="https://www.linkedin.com/in/shahin-sha-chakkingathodi-95946b2b5?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="social-icon glass-panel" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
