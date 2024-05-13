import React from 'react';
import './RotatingCircle.css';

function RotatingCircle() {
  return (
    <div className="circle-container">
      <svg className="circle-svg" viewBox="0 0 200 200">
        <circle className="circle" cx="100" cy="100" r="80"></circle>
        <line className="line" x1="100" y1="20" x2="100" y2="40"></line>
        <line className="line" x1="160" y1="100" x2="180" y2="100"></line>
        <line className="line" x1="100" y1="160" x2="100" y2="180"></line>
        <line className="line" x1="40" y1="100" x2="20" y2="100"></line>
      </svg>
    </div>
  );
}

export default RotatingCircle;