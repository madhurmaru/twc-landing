import React from 'react';
import search from '../images/search.png'

const SearchBar = () => {
  
  return (
    <div className="search-bar">
      <img src={search} alt='search'></img>  
      <input type="text" placeholder="Search dishes" />
    </div>
  );
};

export default SearchBar;
