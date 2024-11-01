'use client';

declare global {
  interface Window {
    feather?: {
      replace: () => void;
    };
  }
}

import React, { useEffect } from 'react';
import Header from './Header';
import DishCard from './DishCard';
import fries from '/public/fries.png';
import nuggets from '/public/nugg.png';
import { ShoppingCart } from "react-feather";

const Cart: React.FC = () => {
  useEffect(() => {
    // Activate Feather Icons
    if (window.feather) {
      window.feather.replace();
    }
  }, []);

  return (
    <div className="app-container">
      <Header /><br />

      <div className="dish-list">
        <div className="cart1"> &nbsp;&nbsp;<ShoppingCart /> Your Cart</div>
        <DishCard 
          name="Crispy fries"
          price={60}
          rating={4.1}
          description="Golden fries with a sprinkle of salt."
          image={fries} 
        />
        <DishCard 
          name="Chicken nuggets"
          price={80}
          rating={4.3}
          description="Deep-fried chicken pieces."
          image={nuggets}
        />
      </div><br />
      <hr className="custom-hr" /><br />
      <div className="header total-header">
        <div>Total</div>
        140
      </div>
    </div>
  );
};

export default Cart;
