import React from 'react';
import { Terminal, Database, Layout, Settings, Box, Cloud } from 'lucide-react';
import './Skills.css';

const SkillModule = ({ category }) => (
  <div className="skill-module cyber-card">
    <div className="skill-header">
      <div className="mono skill-id">{category.id}</div>
      <category.icon size={18} className="skill-icon" />
    </div>
    
    <div className="skill-body">
      <h3 className="skill-title">{category.title}</h3>
      <div className="skill-tags">
        {category.skills.map((skill, idx) => (
          <div key={idx} className="skill-item">
            <div className="skill-info">
              <span className="mono">{skill.name}</span>
              <span className="mono status-code">OK</span>
            </div>
            <div className="skill-bar-container">
              <div className="skill-bar" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Skills = () => {
  const data = [
    {
      id: "MX_01",
      title: "Frontend_Engine",
      icon: Layout,
      skills: [
        { name: "REACT.js", level: 90 },
        { name: "VITE_BUILD", level: 85 },
        { name: "MODERN_CSS", level: 95 },
        { name: "JS_ESNext", level: 88 }
      ]
    },
    {
      id: "MX_02",
      title: "Backend_Kernel",
      icon: Settings,
      skills: [
        { name: "NODE_RUNTIME", level: 85 },
        { name: "EXPRESS_API", level: 82 },
        { name: "REST_PROTO", level: 90 },
        { name: "AUTHENTICATION", level: 75 }
      ]
    },
    {
      id: "MX_03",
      title: "Data_Registry",
      icon: Database,
      skills: [
        { name: "MONGODB", level: 80 },
        { name: "POSTGRESQL", level: 70 },
        { name: "REDIS_CACHE", level: 65 }
      ]
    },
    {
      id: "MX_04",
      title: "Cloud_Interface",
      icon: Cloud,
      skills: [
        { name: "VERCEL_PROD", level: 95 },
        { name: "GIT_VCS", level: 90 },
        { name: "DOCKER_V1", level: 60 }
      ]
    }
  ];

  return (
    <div className="skills-matrix-grid">
      {data.map((item) => <SkillModule key={item.id} category={item} />)}
    </div>
  );
};

export default Skills;
