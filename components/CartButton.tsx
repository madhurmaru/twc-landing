import React from 'react';

interface CartButtonProps {
  setRoute: (route: string) => void;
}

const CartButton: React.FC<CartButtonProps> = ({ setRoute }) => {
  return (
    <div className="cart-button">
      <button onClick={() => setRoute('cart')}>View Cart</button>
    </div>
  );
};

export default CartButton;
