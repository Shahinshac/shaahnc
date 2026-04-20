import React from 'react';

const StatusCard = () => {
  return (
    <div className="bento-tile" style={{ justifyContent: 'center' }}>
      <div className="mono" style={{ marginBottom: '0.8rem' }}>Current Status</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
        <div style={{ 
          width: '10px', 
          height: '10px', 
          background: '#10b981', 
          borderRadius: '50%', 
          boxShadow: '0 0 10px #10b981',
          animation: 'pulse 2s infinite'
        }}></div>
        <span style={{ fontWeight: '600', fontSize: '1.1rem' }}>Active & Exploring</span>
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
        Scanning for Summer 2026 Internships.
      </p>
    </div>
  );
};

export default StatusCard;
