import React, { useState } from 'react';
import './toggle.css';

const Toggle = ({ initialChecked, onToggle }) => {
    console.log(onToggle)
    const [isChecked, setIsChecked] = useState(initialChecked);
  
    const handleToggle = () => {
      setIsChecked((prevValue) => !prevValue);
      console.log("ABABABABBABABAB")
      onToggle(); // Вызов колбэка onToggle для обработки изменений в CreatingLink
    };

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        id={`switch${onToggle}`}
        checked={initialChecked}
        onClick={() => onToggle()}
        // onChange={() => onToggle()}
      />
      <label htmlFor={`switch${onToggle}`}></label>
    </div>
  );
};

export default Toggle;