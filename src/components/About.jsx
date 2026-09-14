import React from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  ShieldCheck, 
  Radio, 
  CreditCard, 
  Boxes, 
  GitBranch, 
  GraduationCap 
} from 'lucide-react';
import './About.css';

const About = () => {
  const engineeringFocus = [
    {
      title: "Full-Stack Application Development",
      desc: "Architecting end-to-end web applications with component-driven frontends and structured backend services.",
      icon: <Code2 size={20} />
    },
    {
      title: "Backend & API Engineering",
      desc: "Designing clean REST APIs and service layers using Node.js, Express, NestJS, and Python (Flask).",
      icon: <Server size={20} />
    },
    {
      title: "Database Design & Migrations",
      desc: "Data modeling, relational constraints, indexing, and ORM integration with PostgreSQL and Prisma.",
      icon: <Database size={20} />
    },
    {
      title: "Authentication & Authorization",
      desc: "Implementing secure session management, JWT tokens, and strict role-based access control (RBAC).",
      icon: <ShieldCheck size={20} />
    },
    {
      title: "Real-Time Communication",
      desc: "Building bi-directional event dispatch pipelines and live sync with WebSockets and Socket.io.",
      icon: <Radio size={20} />
    },
    {
      title: "Payment Integration",
      desc: "Integrating transactional payment gateways (Razorpay) with checkout workflows and verification.",
      icon: <CreditCard size={20} />
    },
    {
      title: "Containerization",
      desc: "Packaging micro-services, databases, and dependencies using Docker for reproducible local environments.",
      icon: <Boxes size={20} />
    },
    {
      title: "CI Workflows & Quality Tooling",
      desc: "Automated linting, testing, and continuous delivery pipelines using GitHub Actions.",
      icon: <GitBranch size={20} />
    }
  ];

  return (
    <section className="section about-section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-dot"></span>
            <span>Profile &amp; Focus</span>
          </div>
          <h2 className="section-title">ABOUT ME</h2>
          <p className="section-subtitle">
            A grounded engineering student dedicated to building robust software systems,
            deepening backend expertise, and mastering modern cloud practices.
          </p>
        </div>

        {/* About Grid */}
        <div className="about-overview-card card-base">
          <div className="about-narrative">
            <div className="student-badge">
              <GraduationCap size={16} />
              <span className="mono">B.Tech in Computer Science &amp; Engineering</span>
            </div>
            
            <p className="about-text">
              I am <strong>Shahin Sha Chakkingathodi</strong> (known across open-source as <strong>Shahinshac</strong>),
              a Computer Science engineering student focused on full-stack web development,
              backend architectures, and relational database systems. I enjoy translating real-world
              operational challenges into reliable, testable software solutions.
            </p>
            <p className="about-text">
              Currently, I am expanding my technical foundation into <strong>Cloud &amp; DevOps</strong>—learning 
              Linux systems administration, networking fundamentals, container orchestration, and CI/CD pipelines 
              to deploy and operate software systems efficiently.
            </p>
          </div>

          <div className="about-highlights-col">
            <div className="highlight-metric-card">
              <span className="metric-label mono">PRIMARY FOCUS</span>
              <span className="metric-value">Full-Stack &amp; Backend Systems</span>
            </div>
            <div className="highlight-metric-card">
              <span className="metric-label mono">FAVORITE STACK</span>
              <span className="metric-value">TypeScript • React • Node • PostgreSQL</span>
            </div>
            <div className="highlight-metric-card">
              <span className="metric-label mono">CURRENT PURSUIT</span>
              <span className="metric-value">Cloud, Docker &amp; CI/CD</span>
            </div>
          </div>
        </div>

        {/* Engineering Experience / Practical Development */}
        <div className="engineering-experience-block">
          <div className="subhead-wrapper">
            <h3 className="subhead-title">ENGINEERING EXPERIENCE</h3>
            <p className="subhead-desc">
              Practical capabilities developed through architecting, building, and deploying real-world software systems.
            </p>
          </div>

          <div className="focus-grid">
            {engineeringFocus.map((focus, index) => (
              <div key={index} className="focus-card card-base">
                <div className="focus-icon-box">
                  {focus.icon}
                </div>
                <h4 className="focus-card-title">{focus.title}</h4>
                <p className="focus-card-desc">{focus.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
