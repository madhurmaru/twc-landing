'use client';

import React from 'react';
import Header from '../../components/Header';
import DishCard from '../../components/DishCard';
import CategorySummary from '../../components/CategorySummary';
import './App.css';
import fries from '/public/fries.png';
import nuggets from '/public/nugg.png';
import icon from '/public/icon.png';
import Image from 'next/image';

//import Cart from './components/cart';

export default function qr() {
    return (
        <div className="main">
                  
            <div className='cart-button'>
                <div className='category'>
                    <CategorySummary />
                    <div className='img1'><Image src={icon} alt='icon' /></div>
                </div>
                <div className="abcd">
                    <button>Open Cart</button>
                </div> 
            </div>
            <Header />
            <div className='Moving'>            
                <div className="dish-list">
                    <DishCard 
                        name="Crispy fries"
                        price={60}
                        rating={4.1}
                        description="Golden fries with a sprinkle of salt."
                        image= {fries} 
                    />
                    <DishCard 
                        name="Chicken nuggets"
                        price={80}
                        rating={4.3}
                        description="Deep-fried chicken pieces."
                        image={nuggets}
                    />
                    <DishCard 
                        name="Chicken nuggets"
                        price={80}
                        rating={4.3}
                        description="Deep-fried chicken pieces."
                        image={nuggets}
                    />
                    <DishCard 
                        name="Chicken nuggets"
                        price={80}
                        rating={4.3}
                        description="Deep-fried chicken pieces."
                        image={nuggets}
                    />
                    <DishCard 
                        name="Chicken nuggets"
                        price={80}
                        rating={4.3}
                        description="Deep-fried chicken pieces."
                        image={nuggets}
                    />
                </div>    
            </div>
        </div>
    );
  }