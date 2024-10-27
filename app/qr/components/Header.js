import React from 'react';
import table from '../images/table.png';
import icon from '../images/Vector.png'
import logo from '../images/logo.png';
import FilterToggle from './FilterToggle';
import SearchBar from './SearchBar';
const Header = () => {

  return (
    
    <div className="top" style={{fontFamily: 'Aleo'}}>
      <div className='header'>
        <div className='logo'><img src={logo} alt='logo'></img></div>
      
        <div className="header1">
          <img src={icon} alt='name'></img><p>Badshah's Kitchen</p> 
        </div>
        <div className="header2 ">
          <img src={table} alt='table'></img><p>Table no. 10</p>
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
