import React from 'react';

const SkillsPulse = () => {
  const categories = [
    { name: 'Frontend', skills: ['React', 'Next.js', 'Vite', 'CSS3'] },
    { name: 'Backend', skills: ['Node.js', 'Express', 'APIs'] },
    { name: 'Design', skills: ['Figma', 'UI/UX', 'Glassmorphism'] }
  ];

  return (
    <div className="bento-tile span-2">
      <div className="mono" style={{ marginBottom: '1rem' }}>Technical Arsenal</div>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1.2rem' }}>Skills <span className="gradient-text">Pulse.</span></h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        {categories.map((cat, idx) => (
          <div key={idx} className="glass-panel" style={{ padding: '1rem', borderRadius: '16px', background: 'rgba(255,255,255,0.02)' }}>
            <div className="mono" style={{ fontSize: '0.65rem', marginBottom: '0.5rem', color: 'var(--accent-2)' }}>{cat.name}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {cat.skills.map((s, sIdx) => (
                <span key={sIdx} style={{ fontSize: '0.8rem', opacity: 0.9 }}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPulse;
