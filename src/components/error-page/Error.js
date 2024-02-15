import React, { useState, useEffect } from 'react';
import "./error.css";

const Error = () => {
  const initialPositions = [
    { x: 50, y: 50 }, { x: 150, y: 50 }, { x: 250, y: 50 }, { x: 350, y: 50 },
    { x: 50, y: 150 }, { x: 150, y: 150 }, { x: 250, y: 150 }, { x: 350, y: 150 },
    { x: 50, y: 250 }, { x: 150, y: 250 }, { x: 250, y: 250 }, { x: 350, y: 250 },
    { x: 50, y: 350 }, { x: 150, y: 350 }, { x: 250, y: 350 }, { x: 350, y: 350 },
  ];

  const svgNames = [
    '#ampersand',
    '#hashtag',
    '#tilde',
    '#triangle',
    '#underscore'
  ];

  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const shuffledPositions = initialPositions.map((position, index) => ({
      x: position.x,
      y: position.y,
      name: svgNames[index % svgNames.length],
      rotation: Math.random() * 360 
    }));

    setPositions(shuffledPositions);
  }, []);

  return (
    <div className="error-page">
      <h1 className="error-code">404</h1>
      <p className="error-message">Упс... страница не найдена</p>
      <div>
        {positions.map((position, index) => (
          <svg
            key={index}
            style={{
              position: 'absolute',
              left: `${position.x}px`,
              top: `${position.y}px`,
              transform: `rotate(${position.rotation}deg)` // Apply random rotation
            }}
            width="30"
            height="30"
          >
            <use xlinkHref={position.name} />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default Error;
