import React, { useEffect } from 'react';
import Header from './Header';
import DishCard from './DishCard';
import fries from '../images/fries.jfif';
import nuggets from '../images/nugg.jfif';
import { ShoppingCart} from "react-feather";

function Cart() {
    useEffect(() => {
        // Activate Feather Icons
        if (window.feather) {
          window.feather.replace();
        }
      }, []);

    return (
        <div className="app-container">
            <Header /><br></br>

            <div className="dish-list">
                <div className='cart1'> &nbsp;&nbsp;<ShoppingCart />  Your Cart</div>
                <DishCard 
                  name="Crispy fries"
                  price="60"
                  rating="4.1"
                  description="Golden fries with a sprinkle of salt."
                  image= {fries} 
                />
                <DishCard 
                  name="Chicken nuggets"
                  price="80"
                  rating="4.3"
                  description="Deep-fried chicken pieces."
                  image={nuggets}
                />
            </div><br></br>
            <hr style={{marginLeft : '20px'}}></hr><br></br>
            <div className='header' style={{marginLeft : '20px'}}>
            
                <div>Total</div>
                140
            </div>
        </div>
    );
};

export default Cart;