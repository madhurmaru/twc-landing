import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface DishCardProps {
  name: string;
  price: number;
  rating: number;
  description: string;
  image: string | StaticImageData;
}

const DishCard: React.FC<DishCardProps> = ({ name, price, rating, description, image }) => {
  return (
    <div className="dish-card">
      <div className="dish-info">
        <h4>{name}</h4>
        <hr />
        <p style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4%', fontWeight: 'bold' }}>
          ₹{price} 
          <span className="dish-rating">⭐{rating}</span>
        </p>
        <p>{description}</p>
      </div>
      <div className="dish-image">
        <Image src={image} alt={name} />
        <button>Add</button>
      </div>
    </div>
  );
};

export default DishCard;
