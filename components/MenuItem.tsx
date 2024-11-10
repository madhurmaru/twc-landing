'use client';

import Image, { StaticImageData } from "next/image";
import { Star } from 'lucide-react';

interface MenuItemProps {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string | StaticImageData;
  rating: number;
  onAddToCart: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  name,
  price,
  description,
  image,
  rating,
  onAddToCart
}) => {
  return (
    (<div className="rounded-2xl bg-[#B29792] p-4">
      <div className="flex justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-serif text-gray-900 mb-1">{name}</h3> 
           <hr className="border-t border-black mb-2" />
          <div className="flex justify-between items-center mb-2">
            <p className="text-base">₹ {price}</p>
            <div className="flex items-center text-sm text-bg-[#000000]-foreground">
              <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
              <span className="text-gray-900">{rating.toFixed(1)}</span>
            </div>
          </div>

          <p className="text-sm text-bg-[#000000]-foreground leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        <div className="flex flex-col items-center justify-between ">
          <div className="relative w-24 h-24 rounded-xl overflow-hidden  mb-2">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 96px) 100vw, 96px"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
          <button 
            onClick={onAddToCart}
            className="px-6 py-1.5 bg-white text-gray-900 rounded-md hover:bg-[#C99E5A] transition-colors text-sm font-medium"
          >
            Add
          </button>
        </div>
      </div>
    </div>)
  );
};

export default MenuItem;