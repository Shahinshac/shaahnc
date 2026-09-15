import React from 'react';
import { 
  GraduationCap, 
  Terminal, 
  Layers, 
  Database, 
  Cloud 
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import './About.css';

const About = () => {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-dot"></span>
            <span>Profile &amp; Context</span>
          </div>
          <h2 className="section-title">ABOUT ME</h2>
          <p className="section-subtitle">
            Computer science student engineering reliable full-stack applications,
            structured backend APIs, and exploring modern deployment pipelines.
          </p>
        </div>

        {/* About Overview Card */}
        <div className="about-overview-card card-base">
          <div className="about-narrative">
            <div className="student-badge">
              <GraduationCap size={16} />
              <span className="mono">B.Tech in Computer Science &amp; Engineering</span>
            </div>
            
            <p className="about-text">
              I am <strong>Shahin Sha Chakkingathodi</strong>, a Computer Science student 
              interested in software engineering and practical systems development.
              I focus on building functional, end-to-end full-stack applications that solve
              real workflow problems rather than speculative prototypes.
            </p>

            <p className="about-text">
              My technical work centers on backend systems, REST API architecture, relational databases,
              and secure transaction logic. I enjoy modeling clean database schemas with PostgreSQL,
              structuring scalable services, and ensuring data consistency across application layers.
            </p>

            <p className="about-text">
              Currently, I am expanding my knowledge into <strong>Cloud &amp; DevOps</strong>—exploring 
              Linux environments, networking fundamentals, Docker containerization, and automated CI/CD 
              workflows to understand how software is reliably built, deployed, and operated.
            </p>
          </div>

          <div className="about-highlights-col">
            <div className="highlight-metric-card">
              <div className="metric-header">
                <Layers size={16} className="metric-icon" />
                <span className="metric-label mono">CORE FOCUS</span>
              </div>
              <span className="metric-value">Full-Stack Web Applications</span>
            </div>

            <div className="highlight-metric-card">
              <div className="metric-header">
                <Database size={16} className="metric-icon" />
                <span className="metric-label mono">SYSTEMS INTEREST</span>
              </div>
              <span className="metric-value">Backend APIs &amp; Databases</span>
            </div>

            <div className="highlight-metric-card">
              <div className="metric-header">
                <Cloud size={16} className="metric-icon" />
                <span className="metric-label mono">CURRENT PURSUIT</span>
              </div>
              <span className="metric-value">Cloud &amp; DevOps Practices</span>
            </div>

            <div className="highlight-metric-card">
              <div className="metric-header">
                <Terminal size={16} className="metric-icon" />
                <span className="metric-label mono">LOCATION</span>
              </div>
              <span className="metric-value">{SITE_CONFIG.social.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
