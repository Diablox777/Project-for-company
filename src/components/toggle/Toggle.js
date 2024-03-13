import React, { useState } from 'react';
import './toggle.css';

const Toggle = ({ initialChecked = false, onToggle }) => {
    const [isChecked, setIsChecked] = useState(initialChecked);
  
    const handleToggle = () => {
      setIsChecked(!isChecked);
      onToggle(); // Вызов колбэка onToggle для обработки изменений в CreatingLink
    };

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        id="switch"
        checked={isChecked}
        onChange={handleToggle}
      />
      <label htmlFor="switch"></label>
    </div>
  );
};

export default Toggle;