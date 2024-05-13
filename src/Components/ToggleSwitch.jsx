import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(prevState => !prevState);
  };

  return (
    <div>
      <button className={`switch ${isToggled ? 'active' : ''}`} onClick={handleToggle}>
        {isToggled ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

export default ToggleSwitch;
