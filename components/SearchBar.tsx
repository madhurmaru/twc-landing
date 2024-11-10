'use client';

import React, { useState } from 'react';
import Image from "next/image";
import { Search } from 'lucide-react';
import nonveg from '/public/Non-veg.png';
import veg from '/public/Veg.png';
import '../styles/globals.css';

interface SearchBarProps {
  tableId: string;
  onFilterChange: (isVeg: boolean) => void;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onFilterChange, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isVeg, setIsVeg] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const toggleFilter = () => {
    const newIsVeg = !isVeg;
    setIsVeg(newIsVeg);
    onFilterChange(newIsVeg);
  };

  return (
    (<div className="flex items-center gap-4 p-4 bg-[#f5f1eb]">
      {/* Search Input */}
      <div className="flex-1">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search dishes"
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white text-gray-700 placeholder:text-gray-400 border-none focus:outline-none focus:ring-2 focus:ring-gray-200"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      {/* Filter Icons and Switch */}
      <div className="flex items-center gap-2">
        <Image
          src={nonveg}
          alt="non-veg"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
        <button
          type="button"
          className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 ${
            isVeg ? 'bg-green-500' : 'bg-red-500'
          }`}
          onClick={toggleFilter}
          aria-label="Toggle vegetarian filter"
        >
          <span
            className={`absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
              isVeg ? 'transform translate-x-6' : ''
            }`}
          />
        </button>
        <Image
          src={veg}
          alt="veg"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </div>
    </div>)
  );
};

export default SearchBar;