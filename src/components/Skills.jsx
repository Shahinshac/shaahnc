import React from 'react';
import { Layers, Server, Layout, PenTool } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="skill-icon" />,
      skills: ["React.js", "Next.js", "Vanilla JS", "HTML5 & CSS3", "Tailwind CSS", "Vite"]
    },
    {
      title: "Backend & Systems",
      icon: <Server className="skill-icon" />,
      skills: ["Node.js", "Express", "RESTful APIs", "Web Audio API", "Database Management"]
    },
    {
      title: "Design & UX",
      icon: <PenTool className="skill-icon" />,
      skills: ["Figma", "UI/UX Prototyping", "Responsive Design", "Micro-animations", "Glassmorphism"]
    },
    {
      title: "Tools & Deployment",
      icon: <Layers className="skill-icon" />,
      skills: ["Git & GitHub", "Vercel", "Render", "NPM", "Vite Configs"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="gradient-text">Skills & Arsenal</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category glass-panel">
              <div className="skill-header">
                {category.icon}
                <h3>{category.title}</h3>
              </div>
              <div className="skill-list">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
