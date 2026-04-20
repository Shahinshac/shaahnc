import React from 'react';

const AuraBackground = () => (
  <div className="aura-container">
    <div className="aura-sphere sphere-1"></div>
    <div className="aura-sphere sphere-2"></div>
    <div className="aura-sphere sphere-3"></div>
  </div>
);

const BentoGrid = ({ children }) => {
  return (
    <div className="bento-grid">
      {children}
    </div>
  );
};

export { AuraBackground, BentoGrid };
