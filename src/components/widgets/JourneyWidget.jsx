import React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';

const JourneyWidget = () => {
  const milestones = [
    { year: '2024', event: 'Started 1st Year CSE', college: 'MEA Engineering College' },
    { year: '2025', event: 'Entered 2nd Year & Specialized in Full-Stack', college: 'MEA Engineering College' },
    { year: '2026', event: 'Building Production-Ready Apps', college: 'Current Focus' }
  ];

  return (
    <div className="bento-tile span-2 row-2">
      <div className="mono" style={{ marginBottom: '1rem' }}>Academic Journey</div>
      <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>The CSE <span className="gradient-text">Exploration.</span></h3>
      
      <div style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid var(--bento-border)' }}>
        {milestones.map((m, idx) => (
          <div key={idx} style={{ marginBottom: '2rem', position: 'relative' }}>
            <div style={{ 
              position: 'absolute', 
              left: '-2.05rem', 
              top: '0.2rem', 
              width: '12px', 
              height: '12px', 
              borderRadius: '50%', 
              background: idx === milestones.length - 1 ? 'var(--accent-1)' : 'var(--text-muted)' 
            }}></div>
            <div className="mono" style={{ fontSize: '0.7rem', color: 'var(--accent-1)' }}>{m.year}</div>
            <div style={{ fontWeight: '600', fontSize: '1rem' }}>{m.event}</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <MapPin size={12} /> {m.college}
            </div>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-2)' }}>
        <GraduationCap size={20} />
        <span style={{ fontWeight: '500' }}>Expected Graduation 2028</span>
      </div>
    </div>
  );
};

export default JourneyWidget;
