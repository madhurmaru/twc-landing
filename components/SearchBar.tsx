import React from 'react';
import Image from 'next/image';
import search from '/public/search.png';

const SearchBar: React.FC = () => {
  return (
    <div className="search-bar">
      <Image src={search} alt="search" />
      <input type="text" placeholder="Search dishes" />
    </div>
  );
};

export default SearchBar;
