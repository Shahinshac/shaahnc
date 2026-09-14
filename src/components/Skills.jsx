import React from 'react';
import { 
  Layout, 
  Server, 
  Database, 
  Terminal, 
  Cpu, 
  Compass
} from 'lucide-react';
import './Skills.css';

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: <Layout size={18} />,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Vite", "HTML", "CSS"]
  },
  {
    id: "backend",
    title: "Backend",
    icon: <Server size={18} />,
    skills: ["Node.js", "Express", "NestJS", "Python", "Flask"]
  },
  {
    id: "database",
    title: "Database",
    icon: <Database size={18} />,
    skills: ["PostgreSQL", "Prisma", "Flask-SQLAlchemy"]
  },
  {
    id: "devops",
    title: "DevOps / Tools",
    icon: <Terminal size={18} />,
    skills: ["Git", "GitHub", "Docker", "GitHub Actions", "Linux", "Vercel"]
  },
  {
    id: "additional",
    title: "Additional",
    icon: <Cpu size={18} />,
    skills: ["Java", "C#"]
  }
];

const Skills = () => {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-dot"></span>
            <span>Capabilities</span>
          </div>
          <h2 className="section-title">TECH STACK</h2>
          <p className="section-subtitle">
            Core technologies and development tooling applied across my academic,
            full-stack, and systems engineering projects.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="tech-stack-grid">
          {skillCategories.map((cat) => (
            <div key={cat.id} className="tech-category-card card-base">
              <div className="category-header">
                <div className="category-icon-box">{cat.icon}</div>
                <h3 className="category-title">{cat.title}</h3>
              </div>
              <div className="tech-items-list">
                {cat.skills.map((skill, index) => (
                  <div key={index} className="tech-badge">
                    <span className="tech-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Small Supporting Section: Currently Learning */}
        <div className="learning-banner card-base">
          <div className="learning-icon-col">
            <div className="learning-pulse-dot"></div>
            <Compass size={20} className="learning-icon" />
          </div>
          
          <div className="learning-content">
            <h3 className="learning-label mono">CURRENTLY LEARNING</h3>
            <div className="learning-domain">Cloud &amp; DevOps</div>
            <div className="learning-topics mono">
              Linux • Networking • Docker • CI/CD • AWS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
