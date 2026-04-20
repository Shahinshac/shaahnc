import React from 'react';
import { ExternalLink, Monitor, Smartphone, CheckCircle, Package } from 'lucide-react';
import './Projects.css';

const GithubIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const ProjectTile = ({ project, span = "span-2" }) => (
  <div className={`bento-tile ${span} project-bento`}>
    <div className="mono" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      {project.icon}
      <span>{project.tech[0]} Project</span>
    </div>
    
    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1 }}>
      {project.description}
    </p>
    
    <div className="tech-stack" style={{ marginBottom: '1.5rem' }}>
      {project.tech.map((tech, idx) => (
        <span key={idx} className="tech-badge">{tech}</span>
      ))}
    </div>
    
    <div style={{ display: 'flex', gap: '1rem' }}>
      <a href={project.github} target="_blank" rel="noreferrer" className="btn-icon" aria-label="GitHub Repository">
        <GithubIcon size={18} />
      </a>
      <a href={project.live} className="btn-icon live-btn" style={{ marginLeft: 'auto' }} target="_blank" rel="noreferrer">
        <ExternalLink size={18} /> Live Demo
      </a>
    </div>
  </div>
);

const ProjectsList = () => {
  const projects = [
    {
      id: 1,
      title: "Restaurant Billing System",
      description: "Cloud-integrated POS with Table Booking & Kitchen Display. Focused on tablet-optimized UX.",
      tech: ["React", "Express", "Vercel"],
      icon: <Monitor size={18} />,
      github: "https://github.com/Shahinshac/restaurant-billing",
      live: "#",
      span: "span-2"
    },
    {
      id: 2,
      title: "Yumm",
      description: "High-end food app UI with seamless transitions and restaurant ordering flows.",
      tech: ["React", "CSS3"],
      icon: <Smartphone size={18} />,
      github: "https://github.com/Shahinshac/Yumm",
      live: "#",
      span: "span-1"
    },
    {
      id: 3,
      title: "Inventory Suite",
      description: "Full-stack inventory tracking for optimized warehouse and data management.",
      tech: ["Node.js", "DB"],
      icon: <Package size={18} />,
      github: "https://github.com/Shahinshac/Web-based-inventory",
      live: "#",
      span: "span-1"
    },
    {
      id: 4,
      title: "Code Analyzer",
      description: "Automated analysis tool for evaluating code smells and architecture quality.",
      tech: ["Scripting", "Clean Code"],
      icon: <CheckCircle size={18} />,
      github: "https://github.com/Shahinshac/Code-Quality-Analyzer",
      live: "#",
      span: "span-2"
    }
  ];

  return (
    <>
      {projects.map((project) => (
        <ProjectTile key={project.id} project={project} span={project.span} />
      ))}
    </>
  );
};

export default ProjectsList;
