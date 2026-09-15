import React from 'react';
import { 
  Wrench, 
  Server, 
  Database, 
  CheckCircle2, 
  Cpu 
} from 'lucide-react';
import './EngineeringApproach.css';

const principles = [
  {
    number: "01",
    title: "Build Practical Systems",
    summary: "Focus on useful applications rather than demo-only projects.",
    icon: <Wrench size={20} />
  },
  {
    number: "02",
    title: "Backend First Thinking",
    summary: "APIs, authentication, business logic and data consistency matter.",
    icon: <Server size={20} />
  },
  {
    number: "03",
    title: "Data & Architecture",
    summary: "Design databases and application workflows carefully.",
    icon: <Database size={20} />
  },
  {
    number: "04",
    title: "Quality & Testing",
    summary: "Use linting, testing, validation and automated checks where appropriate.",
    icon: <CheckCircle2 size={20} />
  },
  {
    number: "05",
    title: "Continuous Learning",
    summary: "Currently expanding into Linux, Networking, Cloud, Docker and CI/CD.",
    icon: <Cpu size={20} />
  }
];

const EngineeringApproach = () => {
  return (
    <section className="section approach-section" id="approach">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-dot"></span>
            <span>Methodology</span>
          </div>
          <h2 className="section-title">ENGINEERING APPROACH</h2>
          <p className="section-subtitle">
            Core principles guiding how I design architectures, write code, and deliver reliable software systems.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="principles-grid">
          {principles.map((item) => (
            <div key={item.number} className="principle-card card-base">
              <div className="principle-top-row">
                <span className="principle-number mono">{item.number}</span>
                <div className="principle-icon-box">
                  {item.icon}
                </div>
              </div>

              <div className="principle-content">
                <h3 className="principle-title">{item.title}</h3>
                <p className="principle-summary">{item.summary}</p>
              </div>

              <div className="principle-accent-bar"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringApproach;
