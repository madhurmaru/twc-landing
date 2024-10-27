import React, { useState } from 'react';
import nonveg from '../images/Non-veg 2.png'
import veg from '../images/Veg 2.png'

const FilterToggle = () => {
  const [isVeg, setIsVeg] = useState(false);

  const toggleFilter = () => {
    setIsVeg(!isVeg);
  };

  return (
    <div className="filter-toggle">
      <img src={nonveg} alt='non-veg'></img>
      
      <div className={`toggle-button ${isVeg ? 'veg' : ''}`} onClick={toggleFilter}>
        <div className="toggle-circle"></div>
      </div>
      
      <img src={veg} alt='veg'></img>
      
    </div>
  );
};

export default FilterToggle;
