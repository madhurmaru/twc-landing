import React from 'react';

const CartButton = ({ setRoute }) => {
  return (
    <div className="cart-button">
      <button onClick={() => setRoute('cart')}>View Cart</button>
    </div>
  );
};

export default CartButton;
