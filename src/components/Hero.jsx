import React from 'react';
import { ArrowRight, Download, Code, Briefcase, Mail } from 'lucide-react';
import './Hero.css';

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
              <Code size={20} />
            </a>
            <a href="https://www.linkedin.com/in/shahin-sha-chakkingathodi-95946b2b5?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="social-icon glass-panel" aria-label="LinkedIn">
              <Briefcase size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
