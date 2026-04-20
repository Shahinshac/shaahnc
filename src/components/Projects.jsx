import React from 'react';
import { ExternalLink, Terminal, HardDrive, Cpu, Layers } from 'lucide-react';
import './Projects.css';

const GithubIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const WorkshopModule = ({ project }) => (
  <div className="workshop-card cyber-card">
    <div className="card-header">
      <div className="header-slug mono">MODULE_{project.id} // STAT: STABLE</div>
      <div className="header-icon">{project.icon}</div>
    </div>
    
    <div className="card-body">
      <h3 className="glitch module-title" data-text={project.title}>{project.title}</h3>
      <p className="module-desc">{project.description}</p>
      
      <div className="module-specs">
        <div className="spec-item">
          <span className="mono spec-label">TECH_STACK:</span>
          <div className="tech-tags">
            {project.tech.map((t, i) => <span key={i} className="tech-tag">{t}</span>)}
          </div>
        </div>
        <div className="spec-item">
          <span className="mono spec-label">DEPL_URL:</span>
          <span className="mono spec-value">{project.live === '#' ? 'N/A' : project.live}</span>
        </div>
      </div>
    </div>

    <div className="card-actions">
      <a href={project.github} target="_blank" rel="noreferrer" className="action-btn">
        <GithubIcon size={16} /> <span className="mono">SOURCE_CODE</span>
      </a>
      <a href={project.live} target="_blank" rel="noreferrer" className="action-btn live-btn">
        <ExternalLink size={16} /> <span className="mono">EXEC_MODULE</span>
      </a>
    </div>
    
    <div className="card-footer-decoration"></div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      id: "01",
      title: "Restaurant Billing System",
      description: "Cloud-integrated POS with Table Booking & KDS. Focused on tablet-optimized UX and real-time data sync.",
      tech: ["REACT", "NODE", "EXPRESS"],
      icon: <Cpu size={18} />,
      github: "https://github.com/Shahinshac/restaurant-billing",
      live: "#"
    },
    {
      id: "02",
      title: "Yumm Food Engine",
      description: "High-end food application UI with advanced transition logic and ordering flow architecture.",
      tech: ["REACT", "CSS3", "JS"],
      icon: <Layers size={18} />,
      github: "https://github.com/Shahinshac/Yumm",
      live: "#"
    },
    {
      id: "03",
      title: "Inventory Suite v1",
      description: "Full-stack inventory management system optimized for warehouse automation and data integrity.",
      tech: ["NODE", "DATABASE", "API"],
      icon: <HardDrive size={18} />,
      github: "https://github.com/Shahinshac/Web-based-inventory",
      live: "#"
    },
    {
      id: "04",
      title: "Code Quality Analyzer",
      description: "Automated tooling for static code analysis, architecture evaluation, and metric visualization.",
      tech: ["SCRIPTS", "ALGO", "QA"],
      icon: <Terminal size={18} />,
      github: "https://github.com/Shahinshac/Code-Quality-Analyzer",
      live: "#"
    }
  ];

  return (
    <div className="workshop-grid">
      {projects.map((p) => <WorkshopModule key={p.id} project={p} />)}
    </div>
  );
};

export default Projects;
