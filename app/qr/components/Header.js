'use client';

import React from 'react';
import table from '../images/table.png';
import icon from '../images/Vector.png'
import logo from '../images/logo.png';
import FilterToggle from './FilterToggle';
import SearchBar from './SearchBar';
import Image from 'next/image';

const Header = () => {

  return (
    
    <div className="top" style={{fontFamily: 'Aleo'}}>
      <div className='header'>
        <div className='logo'><Image src={logo} alt='logo' /></div>
      
        <div className="header1">
          <Image src={icon} alt='name' /><p>Badshah&apos;s Kitchen</p> 
        </div>
        <div className="header2 ">
          <Image src={table} alt='table' /><p>Table no. 10</p>
        </div>
      </div>
      
      
      <div className='h'>
        <SearchBar />
        <FilterToggle />
      </div> 
    </div>
    
  );
};

export default Header;
