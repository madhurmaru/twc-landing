'use client';
import React, { useEffect } from 'react';
import search from '../images/search.png'

const SearchBar = () => {
  useEffect(() => {
    // Activate Feather Icons
    if (window.feather) {
      window.feather.replace();
    }
  }, []);
  
  return (
    <div className="search-bar">
      <img src={search} alt='search'></img>  
      <input type="text" placeholder="Search dishes" />
    </div>
  );
};

export default SearchBar;
