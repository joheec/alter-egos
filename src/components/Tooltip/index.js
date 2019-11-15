import React from 'react';
import './styles.css';

const Tooltip = ({ children, text }) => {
  return (
    <div className="tooltip-container">
      <span className="tooltip-text">{text}</span>
      {children}
    </div>
  );
};

export default Tooltip;
