import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  CheckCircle2, 
  X, 
  Info, 
  Server,
  Activity,
  Lock
} from 'lucide-react';
import { GithubIcon } from './Icons';
import './Projects.css';

const projectsData = [
  {
    id: "hospital-os",
    number: "01",
    title: "HospitalOS + PharmacyERP",
    engineeringFocus: "Healthcare workflow + inventory integration",
    description: "Integrated clinical operations and pharmacy inventory platform featuring patient record tracking, medication dispensing with FEFO stock rotation, and dual web and desktop clients.",
    stack: ["NestJS", "React", "TypeScript", "Prisma", "PostgreSQL", "Docker", "C#"],
    keyFeatures: [
      "Clinical records management & outpatient scheduling",
      "Pharmacy dispensing with FEFO stock rotation",
      "Role-based access control for doctors and pharmacists",
      "PostgreSQL relational modeling with Prisma ORM",
      "C# Windows desktop module communicating via REST APIs"
    ],
    github: "https://github.com/Shahinshac/HospitalOs",
    live: null,
    authRequired: false,
    details: {
      overview: "HospitalOS + PharmacyERP unifies clinical records management with pharmacy inventory control to eliminate stock expiration waste and improve administrative coordination.",
      problem: "Traditional clinic systems struggle with disconnected pharmacy inventory, leading to expired medication dispensation and disorganized record sharing between doctors and dispensaries.",
      solution: "Engineered a centralized PostgreSQL database accessed through NestJS REST APIs and Prisma ORM. Paired with a React doctor console and a native C# client for rapid pharmacy dispensing.",
      architecture: "NestJS backend services containerized with Docker, PostgreSQL relational schema, React web interface, and C# client communicating over REST endpoints."
    }
  },
  {
    id: "restaurant-pos",
    number: "02",
    title: "Restaurant Billing & Real-Time POS",
    engineeringFocus: "Real-time order synchronization",
    description: "Multi-station restaurant operations suite featuring dynamic table management, instantaneous kitchen order dispatch via WebSockets, and integrated payment processing.",
    stack: ["Next.js", "Node.js", "Express", "Socket.io", "Prisma", "PostgreSQL", "Razorpay"],
    keyFeatures: [
      "Dynamic table management & fast billing calculation",
      "Real-time kitchen order dispatch via Socket.io",
      "Bi-directional WebSocket order updates across stations",
      "Secure Razorpay checkout and verification workflow",
      "PostgreSQL schema migrations with Prisma ORM"
    ],
    github: "https://github.com/Shahinshac/restaurant-billing",
    live: "https://restaurant-billing-phi.vercel.app",
    authRequired: true,
    details: {
      overview: "A food-service management system designed to accelerate table turnover, push waitstaff orders instantly to kitchen screens, and streamline customer bill settlement.",
      problem: "Order discrepancies and delays happen frequently when waitstaff paper slips fail to sync immediately with kitchen prep stations or during peak checkout rush.",
      solution: "Constructed an event-driven synchronization layer using Node.js and Socket.io to push table tickets immediately to the Kitchen Display System, backed by Next.js and Razorpay.",
      architecture: "Next.js frontend deployed on Vercel, Node.js/Express backend server, Socket.io bi-directional WebSocket channels, and PostgreSQL via Prisma."
    }
  },
  {
    id: "core-banking",
    number: "03",
    title: "Core Banking System (CBS)",
    engineeringFocus: "Role-based banking workflows",
    description: "Financial management application facilitating account creation, multi-account ledger operations, transactional fund transfers, and automated loan EMI schedule calculations.",
    stack: ["React", "TypeScript", "Python Flask", "Flask-SQLAlchemy", "PostgreSQL", "JWT"],
    keyFeatures: [
      "Customer account creation & multi-account management",
      "Atomic deposits, withdrawals & ledger fund transfers",
      "Loan application processing & automated EMI schedule calculations",
      "Role-based authorization for tellers, managers, and account holders",
      "Relational integrity and audit-ready transaction logs"
    ],
    github: "https://github.com/Shahinshac/CBS",
    live: "https://cbs-swart-ten.vercel.app",
    authRequired: false,
    details: {
      overview: "A core financial management engine simulating retail banking workflows, credit assessment schedules, and transactional ledger accounting.",
      problem: "Financial operations require strict data consistency, role separation, and error-safe balance updates to prevent balance calculation bugs or unauthorized actions.",
      solution: "Developed Python Flask REST endpoints with Flask-SQLAlchemy and PostgreSQL, enforcing signed JWT authentication and role-based permissions separating customer accounts from teller operations.",
      architecture: "React + TypeScript frontend dashboard interacting with a Python Flask service backed by PostgreSQL relational tables."
    }
  },
  {
    id: "code-analyzer",
    number: "04",
    title: "Code Quality Analyzer",
    engineeringFocus: "Static analysis + software metrics",
    description: "Developer inspection tool utilizing Abstract Syntax Tree (AST) parsing and machine learning models to calculate maintainability metrics and detect structural code smells.",
    stack: ["Python", "Flask", "AST Parsing", "scikit-learn", "Docker", "Pytest", "GitHub Actions"],
    keyFeatures: [
      "Cyclomatic complexity & Halstead volume metrics",
      "Maintainability Index calculation engine",
      "Static code smell detection & structural warnings",
      "Automated unit testing with Pytest test suites",
      "Automated CI validation with GitHub Actions workflows"
    ],
    github: "https://github.com/Shahinshac/Code-Quality-Analyzer",
    live: "https://code-quality-analyzer-black.vercel.app",
    authRequired: false,
    details: {
      overview: "An automated code analysis utility that parses Python source code, inspects syntax trees via AST nodes, and generates quantifiable maintainability metrics.",
      problem: "Software technical debt accumulates rapidly when teams lack automated metrics to catch high cyclomatic complexity, excessive nesting, or monolithic functions early.",
      solution: "Engineered an AST-driven inspection parser computing Cyclomatic Complexity, Halstead effort metrics, and overall Maintainability Index, packaged with Docker and GitHub Actions CI.",
      architecture: "Python Flask analysis backend utilizing the native `ast` parser, scikit-learn pattern classification, Docker container, and Pytest automated validation."
    }
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-dot"></span>
            <span>Portfolio</span>
          </div>
          <h2 className="section-title">FEATURED PROJECTS</h2>
          <p className="section-subtitle">
            Engineered full-stack applications with verified source code, realistic workflows,
            and structured backend architectures.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projectsData.map((project) => (
            <article key={project.id} className="project-card card-base">
              {/* Card Top Bar */}
              <div className="card-top-bar">
                <div className="project-header-meta">
                  <span className="project-num-badge mono">{project.number}</span>
                  <span className="project-focus-tag mono">{project.engineeringFocus}</span>
                </div>
                <button 
                  className="details-trigger-btn"
                  onClick={() => setSelectedProject(project)}
                  title="View Architecture Specifications"
                >
                  <Info size={14} /> Specs
                </button>
              </div>

              <div className="card-main">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                {/* Tech Stack Pills */}
                <div className="project-stack">
                  {project.stack.map((tech, idx) => (
                    <span key={idx} className="badge badge-cyan">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Technical Highlights */}
                <div className="features-preview">
                  <span className="features-heading mono">TECHNICAL HIGHLIGHTS</span>
                  <ul className="features-list">
                    {project.keyFeatures.slice(0, 3).map((feature, i) => (
                      <li key={i} className="feature-item">
                        <CheckCircle2 size={14} className="feature-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="project-actions">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn btn-secondary btn-sm"
                >
                  Architecture &amp; Specs
                </button>

                <div className="action-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-cta-link"
                      title="View GitHub Repository"
                      aria-label={`${project.title} GitHub Source`}
                    >
                      <GithubIcon size={16} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.live && (
                    <div className="live-link-container">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-cta-link project-cta-live"
                        title="Open Live Deployment"
                        aria-label={`${project.title} Live Application`}
                      >
                        <ExternalLink size={15} />
                        <span>Live Demo</span>
                      </a>
                      {project.authRequired && (
                        <span className="auth-pill mono" title="Authentication required to view system data">
                          <Lock size={10} /> Auth req.
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="modal-overlay" 
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-header-info">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                  <span className="badge badge-cyan mono">PROJECT {selectedProject.number}</span>
                  <span className="project-focus-tag mono">{selectedProject.engineeringFocus}</span>
                  {selectedProject.authRequired && (
                    <span className="auth-pill mono">
                      <Lock size={11} /> Authentication required
                    </span>
                  )}
                </div>
                <h3 id="modal-title" className="modal-title">{selectedProject.title}</h3>
              </div>
              <button 
                className="modal-close-btn" 
                onClick={() => setSelectedProject(null)}
                aria-label="Close Project Details"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="modal-body">
              {/* Overview */}
              <div className="modal-section">
                <h4 className="modal-section-title">
                  <Activity size={14} /> OVERVIEW
                </h4>
                <p className="modal-section-content">
                  {selectedProject.details.overview}
                </p>
              </div>

              {/* Problem & Solution */}
              <div className="modal-problem-solution-grid">
                <div className="modal-section pb-item">
                  <h4 className="modal-section-title">THE PROBLEM</h4>
                  <p className="modal-section-content">{selectedProject.details.problem}</p>
                </div>
                <div className="modal-section pb-item">
                  <h4 className="modal-section-title">THE SOLUTION</h4>
                  <p className="modal-section-content">{selectedProject.details.solution}</p>
                </div>
              </div>

              {/* Key Features */}
              <div className="modal-section">
                <h4 className="modal-section-title">KEY TECHNICAL HIGHLIGHTS</h4>
                <ul className="modal-feature-list">
                  {selectedProject.keyFeatures.map((feat, i) => (
                    <li key={i} className="modal-feature-item">
                      <CheckCircle2 size={15} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architecture & Tech Stack */}
              <div className="modal-section">
                <h4 className="modal-section-title">
                  <Server size={14} /> ARCHITECTURE &amp; TECHNOLOGIES
                </h4>
                <p className="modal-section-content" style={{ marginBottom: '0.8rem' }}>
                  {selectedProject.details.architecture}
                </p>
                <div className="modal-tech-pills">
                  {selectedProject.stack.map((t, idx) => (
                    <span key={idx} className="badge badge-indigo">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="modal-footer-actions">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <GithubIcon size={16} /> View Source Code
                  </a>
                )}
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    <ExternalLink size={16} /> Open Live Demo
                    {selectedProject.authRequired && " (Auth Required)"}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
