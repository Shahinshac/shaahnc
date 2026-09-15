import React from 'react';
import { 
  Layout, 
  Server, 
  Database, 
  Terminal, 
  Cpu, 
  Compass,
  BookOpen
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
    title: "DevOps & Tools",
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

const learningTopics = [
  "Linux",
  "Networking",
  "Docker",
  "CI/CD",
  "AWS"
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
            Organized tools and core technologies applied across full-stack applications,
            academic coursework, and systems projects.
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

        {/* Section 8: Currently Learning Section */}
        <div className="learning-section-wrapper card-base">
          <div className="learning-header-row">
            <div className="learning-badge-pill">
              <div className="learning-pulse-dot"></div>
              <Compass size={15} />
              <span className="mono">CURRENTLY LEARNING</span>
            </div>
            <div className="learning-status-note mono">
              <BookOpen size={13} /> Active Study &amp; Experimentation
            </div>
          </div>

          <div className="learning-main-content">
            <div className="learning-domain-group">
              <h3 className="learning-domain-title">Cloud &amp; DevOps</h3>
              <p className="learning-domain-desc">
                Expanding knowledge into core systems, networking concepts, and container workflows.
                Focusing on understanding how software runs reliably beyond the local development environment.
              </p>
            </div>

            <div className="learning-topics-grid">
              {learningTopics.map((topic, i) => (
                <div key={i} className="learning-topic-card">
                  <span className="topic-dot"></span>
                  <span className="mono topic-name">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
