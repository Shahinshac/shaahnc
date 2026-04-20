import React from 'react';
import { ExternalLink, Monitor, Smartphone, CheckCircle, Package } from 'lucide-react';
import './Projects.css';

const GithubIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Restaurant Billing System",
      description: "A comprehensive, cloud-integrated platform for managing modern restaurants with a tablet-first approach. Includes a high-performance POS model, Table Booking, and Kitchen Display System.",
      tech: ["React", "Node.js", "Express", "Web Audio API"],
      highlights: [
        "Figma-driven premium UI/UX overhaul",
        "Web Audio chime synthesis for notifications",
        "Dual-layer notification system (POS & KDS modules)",
        "Real-time visual status indicators"
      ],
      icon: <Monitor className="project-type-icon" />,
      github: "https://github.com/Shahinshac/restaurant-billing",
      live: "#"
    },
    {
      id: 2,
      title: "Yumm",
      description: "A dynamic, food-focused application featuring interactive UI elements and restaurant-grade ordering flows.",
      tech: ["React", "JavaScript", "CSS3"],
      highlights: [
        "Interactive UI components",
        "Responsive design catering to multiple devices",
        "Seamless user experience"
      ],
      icon: <Smartphone className="project-type-icon" />,
      github: "https://github.com/Shahinshac/Yumm",
      live: "#"
    },
    {
      id: 3,
      title: "Web-Based Inventory",
      description: "A streamlined inventory management system built for tracking stock, managing workflows, and maintaining data precision.",
      tech: ["Web Tech", "Backend Services", "Database"],
      highlights: [
        "Real-time workflow tracking",
        "Data persistence and integrity",
        "Clear and concise reporting interfaces"
      ],
      icon: <Package className="project-type-icon" />,
      github: "https://github.com/Shahinshac/Web-based-inventory",
      live: "#"
    },
    {
      id: 4,
      title: "Code Quality Analyzer",
      description: "An automated tooling solution designed to evaluate and analyze codebases for better maintainability and quality.",
      tech: ["Scripting", "Analysis Tools", "Algorithms"],
      highlights: [
        "Automated reporting for code smells",
        "Performance optimization suggestions",
        "Clean code metric tracking"
      ],
      icon: <CheckCircle className="project-type-icon" />,
      github: "https://github.com/Shahinshac/Code-Quality-Analyzer",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="gradient-text">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card glass-panel">
              <div className="project-header">
                {project.icon}
                <h3>{project.title}</h3>
              </div>
              
              <p className="project-desc">{project.description}</p>
              
              <div className="project-highlights">
                <h4>Key Features</h4>
                <ul>
                  {projects.highlights ? project.highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  )) : project.highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="tech-stack">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer" className="btn-icon" aria-label="GitHub Repository">
                  <GithubIcon size={20} /> Code
                </a>
                <a href={project.live} className="btn-icon live-btn" aria-label="Live Demo" onClick={(e) => { if(project.live === '#') e.preventDefault() }}>
                  <ExternalLink size={20} /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
