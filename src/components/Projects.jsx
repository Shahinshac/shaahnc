import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  CheckCircle2, 
  X, 
  Info, 
  ArrowUpRight,
  Server,
  Activity
} from 'lucide-react';
import { GithubIcon } from './Icons';
import './Projects.css';

const projectsData = [
  {
    id: "hospital-os",
    title: "HospitalOS + PharmacyERP",
    subtitle: "Enterprise Clinical & Pharmacy Management",
    description: "Integrated hospital operations platform orchestrating clinical workflows, patient records, and pharmacy inventory management with FEFO stock rotation and dual web/desktop interfaces.",
    stack: ["NestJS", "React", "TypeScript", "Prisma", "PostgreSQL", "Docker", "C#"],
    keyFeatures: [
      "Hospital management workflows & patient records",
      "Pharmacy management with FEFO stock rotation",
      "Strict role-based access control (RBAC)",
      "PostgreSQL database management with Prisma ORM",
      "C# Windows Forms desktop integration"
    ],
    github: "https://github.com/Shahinshac/HospitalOs",
    live: null, // Desktop & local microservices architecture
    details: {
      overview: "HospitalOS + PharmacyERP is a dual-tier health informatics system designed to unify hospital clinical records with pharmacy supply-chain mechanics. It eliminates stock expiration waste and administrative bottlenecks in multi-department clinics.",
      problem: "Traditional clinic systems suffer from disconnected pharmacy stock tracking, leading to expired medications and unauthorized dispensing, alongside slow paper-based outpatient queues.",
      solution: "Engineered a centralized PostgreSQL database accessed via NestJS REST APIs and Prisma ORM, providing role-based security. Paired with a React web console for doctors and a native C# Windows Forms desktop app for high-throughput pharmacy dispensing.",
      architecture: "NestJS backend containerized with Docker, PostgreSQL relational engine, React doctor/admin dashboard, and C# client communicating over REST endpoints."
    }
  },
  {
    id: "restaurant-pos",
    title: "Restaurant Billing & Real-Time POS",
    subtitle: "Real-Time Cloud Kitchen & POS Suite",
    description: "Cloud-connected POS system featuring real-time kitchen order dispatch, table management, live WebSocket updates, and secure payment checkout.",
    stack: ["Next.js", "Node.js", "Express", "Socket.io", "Prisma", "PostgreSQL", "Razorpay"],
    keyFeatures: [
      "Dynamic table management & billing workflows",
      "Real-time kitchen order dispatch via Socket.io",
      "WebSocket bi-directional order status updates",
      "Integrated Razorpay payment processing",
      "PostgreSQL database with schema-safe Prisma migrations"
    ],
    github: "https://github.com/Shahinshac/restaurant-billing",
    live: "https://restaurant-billing-phi.vercel.app",
    details: {
      overview: "A modern food-service operations management solution designed for real-time table turnover, instant kitchen order communication, and touchless transaction reconciliation.",
      problem: "Restaurant order delays and reconciliation errors occur when waitstaff orders do not reflect instantly on kitchen display screens or when bills fail to sync with live payments.",
      solution: "Implemented an event-driven architecture using Node.js and Socket.io to push table tickets immediately to the Kitchen Display System (KDS), integrated with Razorpay gateway and Next.js frontend.",
      architecture: "Next.js frontend deployed on Vercel, Node.js/Express backend on cloud services, Socket.io WebSocket channels, and PostgreSQL via Prisma ORM."
    }
  },
  {
    id: "core-banking",
    title: "Core Banking System",
    subtitle: "Transactional Banking & Credit Engine",
    description: "Robust transactional banking engine facilitating customer onboarding, multi-account ledger operations, fund transfers, and automated loan EMI repayment calculations.",
    stack: ["React", "TypeScript", "Python", "Flask", "PostgreSQL", "JWT"],
    keyFeatures: [
      "Customer onboarding & KYC account creation",
      "Transactional deposits, withdrawals & ledger transfers",
      "End-to-end loan application & EMI schedule generator",
      "Role-based authorization (Teller, Manager, Admin)",
      "Strict financial validation & audit-ready database logs"
    ],
    github: "https://github.com/Shahinshac/CBS",
    live: "https://cbs-swart-ten.vercel.app",
    details: {
      overview: "A core financial management engine simulating institutional retail banking operations, credit assessment workflows, and transactional ledger accounting.",
      problem: "Banking workflows require strict transactional atomicity, non-repudiation, and auditability where double-spending or unauthorized account operations cannot be tolerated.",
      solution: "Built a Python Flask API enforcing ACID transaction guarantees in PostgreSQL, authenticated with signed JWT sessions and granular role authorization separating customer accounts from teller operations.",
      architecture: "React + TypeScript dashboard interface interacting with Python Flask microservice backend backed by PostgreSQL relational schemas."
    }
  },
  {
    id: "code-analyzer",
    title: "Code Quality Analyzer",
    subtitle: "Static Analysis & Metric Tooling",
    description: "Static code inspection tool leveraging Abstract Syntax Tree (AST) parsing and machine learning algorithms to compute complexity metrics and detect architectural code smells.",
    stack: ["Python", "Flask", "AST parsing", "scikit-learn", "Docker", "Pytest", "GitHub Actions"],
    keyFeatures: [
      "Cyclomatic complexity & Halstead volume metrics",
      "Maintainability Index scoring algorithm",
      "Static code smell detection & structural warnings",
      "Automated unit testing with Pytest test suites",
      "Continuous integration via GitHub Actions workflows"
    ],
    github: "https://github.com/Shahinshac/Code-Quality-Analyzer",
    live: "https://code-quality-analyzer-black.vercel.app",
    details: {
      overview: "An automated developer utility that inspects Python source files, breaks down code structure via AST nodes, and generates quantifiable maintainability metrics.",
      problem: "Software debt grows exponentially when teams lack objective metrics to identify high-complexity functions, dead branches, and monolithic anti-patterns prior to code review.",
      solution: "Developed an AST-driven inspection parser that calculates Cyclomatic Complexity, Halstead effort metrics, and overall Maintainability Index, with Dockerized deployment and GitHub Actions automation.",
      architecture: "Python Flask analysis microservice utilizing the native `ast` module, scikit-learn pattern classification, Docker container, and Pytest CI verification."
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
            Engineered full-stack applications with verified source code, operational workflows,
            and production-ready architectures.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projectsData.map((project) => (
            <article key={project.id} className="project-card card-base">
              <div className="card-top-bar">
                <span className="project-subtitle-badge mono">{project.subtitle}</span>
                <button 
                  className="details-trigger-btn"
                  onClick={() => setSelectedProject(project)}
                  title="View Project Specifications"
                >
                  <Info size={15} /> Specs
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

                {/* Key Features List */}
                <div className="features-preview">
                  <span className="features-heading mono">KEY FEATURES</span>
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
                  Overview &amp; Architecture
                </button>

                <div className="action-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link"
                      title="View GitHub Repository"
                      aria-label={`${project.title} GitHub Source`}
                    >
                      <GithubIcon size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link icon-link-live"
                      title="Open Live Deployment"
                      aria-label={`${project.title} Live Application`}
                    >
                      <ArrowUpRight size={18} />
                    </a>
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
                <span className="badge badge-cyan mono">{selectedProject.subtitle}</span>
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
                <h4 className="modal-section-title">KEY FEATURES</h4>
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
