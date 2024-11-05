'use client';

import React, { useState } from 'react';
import nonveg from '../images/Non-veg 2.png'
import veg from '../images/Veg 2.png'
import Image from 'next/image';

const FilterToggle = () => {
  const [isVeg, setIsVeg] = useState(false);

  const toggleFilter = () => {
    setIsVeg(!isVeg);
  };

  return (
    <div className="filter-toggle">
      <Image src={nonveg} alt='non-veg' />
      <div className={`toggle-button ${isVeg ? 'veg' : ''}`} onClick={toggleFilter}>
        <div className="toggle-circle"></div>
      </div>
      
      <Image src={veg} alt='veg' />
      
    </div>
  );
};

export default FilterToggle;
