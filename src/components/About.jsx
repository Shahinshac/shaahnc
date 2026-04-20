import React from 'react';
import { User, BookOpen, Target, Coffee } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="gradient-text">About Me</h2>
        
        <div className="about-grid">
          <div className="about-text glass-panel">
            <h3>Hi, I'm Shahin Sha!</h3>
            <p>
              I am currently in my <strong>2nd year</strong> of the Computer Science and Engineering program at <strong>MEA Engineering College, Perinthalmanna</strong>.
            </p>
            <p>
              My passion lies in crafting deep, intricate web applications that not only solve real-world problems but also deliver a WOW factor through their premium UI/UX. Recently, I've been heavily focused on building a modern <em>Restaurant Management Suite</em> that handles high-performance POS tasks and real-time backend updates.
            </p>
            <p>
              When I'm not coding, I'm analyzing new design trends, learning cloud deployment strategies, and refining my system architectures.
            </p>
          </div>
          
          <div className="about-cards">
            <div className="stat-card glass-panel">
              <BookOpen className="stat-icon" size={32} />
              <h4>Education</h4>
              <p>B.Tech CSE</p>
              <span className="stat-sub">MEA Engineering College</span>
            </div>
            
            <div className="stat-card glass-panel">
              <Target className="stat-icon" size={32} />
              <h4>Focus</h4>
              <p>Full-Stack Web</p>
              <span className="stat-sub">React, Node, Cloud</span>
            </div>
            
            <div className="stat-card glass-panel">
              <CodeIcon className="stat-icon" size={32} />
              <h4>Experience</h4>
              <p>2+ Years</p>
              <span className="stat-sub">Coding & Design</span>
            </div>
            
            <div className="stat-card glass-panel">
              <Coffee className="stat-icon" size={32} />
              <h4>Coffee</h4>
              <p>Countless</p>
              <span className="stat-sub">Cups consumed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Custom icon since we used a simple one
const CodeIcon = ({size, className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);

export default About;
