'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import { ShoppingCart, Minus, Plus } from 'lucide-react';
import Header from '@/components/Header';

interface CartPageProps {
  params: { tableId: string };
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function CartPage({ params }: CartPageProps) {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: 'Crispy fries', price: 60, image: '/fries.png', quantity: 2 },
    { id: 2, name: 'Chicken nuggets', price: 80, image: '/nugg.png', quantity: 1 },
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePlaceOrder = () => {
    router.push(`/menu/${params.tableId}/order-tracking`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f1eb]">
      <Header tableId={params.tableId} />

      <main className="flex-1 p-4">
        <div className="rounded-2xl bg-[#B29792] p-4 mb-4">
          <div className="flex items-center gap-2 mb-6">
            <ShoppingCart className="w-5 h-5" />
            <h2 className="text-xl font-serif">Your Cart</h2>
          </div>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <div className="relative w-[60px] h-[60px]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p>₹ {item.price}</p>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-lg p-1">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="p-1 hover:bg-gray-100 rounded"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="p-1 hover:bg-gray-100 rounded"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
            <h3 className="text-lg font-medium">Total</h3>
            <p className="text-lg">₹ {getTotal()}</p>
          </div>
        </div>
      </main>

      <div className="sticky bottom-0 p-4">
        <div className="rounded-2xl bg-[#e8d7d7] p-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-medium">Running Bill</span>
            <span className="text-lg">₹ {getTotal()}</span>
          </div>
          <button 
            onClick={handlePlaceOrder}
            className="w-full py-3 bg-[#4E3E3B] text-white rounded-md hover:bg-[#3a2e2c] transition-colors"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}