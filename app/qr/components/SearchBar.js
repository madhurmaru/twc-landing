import React from 'react';
import search from '../images/search.png'
import Image from 'next/image';

const SearchBar = () => {
  
  return (
    <div className="search-bar">
      <Image src={search} alt='search' />  
      <input type="text" placeholder="Search dishes" />
    </div>
  );
};

export default SearchBar;
