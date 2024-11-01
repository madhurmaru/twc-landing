'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import nonveg from '/public/Non-veg 2.png';
import veg from '/public/Veg 2.png';

const FilterToggle: React.FC = () => {
  const [isVeg, setIsVeg] = useState<boolean>(false);

  const toggleFilter = () => {
    setIsVeg(!isVeg);
  };

  return (
    <div className="filter-toggle">
      <Image src={nonveg} alt="non-veg" />
      <div className={`toggle-button ${isVeg ? 'veg' : ''}`} onClick={toggleFilter}>
        <div className="toggle-circle"></div>
      </div>
      <Image src={veg} alt="veg" />
    </div>
  );
};

export default FilterToggle;
