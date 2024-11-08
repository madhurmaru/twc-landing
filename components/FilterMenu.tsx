'use client';

import { useState } from 'react';
import { Utensils } from 'lucide-react';

interface Category {
  name: string;
  count: number;
}

const categories: Category[] = [
  { name: 'Starters', count: 15 },
  { name: 'Main course', count: 12 },
  { name: 'Beverages', count: 6 },
  { name: 'Desserts', count: 9 },
  { name: 'Alcohol', count: 22 },
];

interface FilterMenuProps {
  onFilterChange: (isVeg: boolean) => void;
}

const FilterMenu: React.FC<FilterMenuProps> = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterChange = (isVeg: boolean) => {
    onFilterChange(isVeg);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 rounded-full bg-[#EBCDB5] text-bg-[#000000] hover:bg-[#3a2e2c] transition-colors"
        aria-label="Filter Menu"
      >
        <Utensils className="w-5 h-5" />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu */}
          <div className="absolute bottom-full right-0 mb-2 w-48 bg-[#4E3E3B] rounded-lg shadow-lg overflow-hidden">
            {/* Existing Categories */}
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => handleFilterChange(category.name === 'Vegetarian')}
                className="flex justify-between items-center w-full px-4 py-2.5 text-white hover:bg-[#4E3E3B] transition-colors"
              >
                <span>{category.name}</span>
                <span className="text-sm opacity-80">
                  {category.count.toString().padStart(2, '0')}
                </span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default FilterMenu;