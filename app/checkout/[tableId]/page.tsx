'use client';

import React from 'react';
import Header from '@/components/Header';

interface CheckoutPageParams {
  tableId: string;
}


interface CheckoutPageProps {
  params: CheckoutPageParams;
}

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ params }) => {
  const [review, setReview] = React.useState('');

  // Static data to replace backend functionality
  const [items] = React.useState<CartItem[]>([
    { id: 1, name: "Burger", quantity: 2, price: 150 },
    { id: 2, name: "Fries", quantity: 1, price: 80 },
    { id: 3, name: "Soda", quantity: 2, price: 40 },
  ]);

  // Check if params is defined
  if (!params) {
    return <div>Error: No parameters provided.</div>;
  }
  
  const { tableId } = params;

  const getTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const subtotal = getTotal();
  const gstPercent = 10;
  const gstAmount = (subtotal * gstPercent) / 100;
  const totalAmount = subtotal + gstAmount;

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Review submitted:', review);
    setReview('');
  };

  return (
    <div className="min-h-screen bg-[#f5f1eb] flex flex-col">
      <Header tableId={tableId} />

      <div className="flex-1 p-4 space-y-4">
        <div className="rounded-2xl bg-[#B29792] p-6">
          <p className="text-center italic mb-4">We hope you enjoyed our service!</p>
          
          <h2 className="text-lg font-medium mb-3">Order Summary</h2>
          
          <div className="mb-4">
            <div className="grid grid-cols-3 text-sm italic mb-2">
              <span>Dish Name</span>
              <span className="text-center">Quantity</span>
              <span className="text-right">Price</span>
            </div>
            
            {items.length > 0 ? (
              items.map((item) => (
                <div key={item.id} className="grid grid-cols-3 text-sm py-1">
                  <span>{item.name}</span>
                  <span className="text-center">{item.quantity}</span>
                  <span className="text-right">₹ {item.price * item.quantity}</span>
                </div>
              ))
            ) : (
              <div className="text-center text-sm italic">No items in the cart.</div>
            )}
          </div>

          <div className="border-t border-gray-600 pt-2 mb-4">
            <div className="grid grid-cols-2 text-sm italic mb-2">
              <span>Tax Type</span>
              <div className="grid grid-cols-2">
                <span>Percent</span>
                <span className="text-right">Amount</span>
              </div>
            </div>
            <div className="grid grid-cols-2 text-sm">
              <span>GST</span>
              <div className="grid grid-cols-2">
                <span>{gstPercent}%</span>
                <span className="text-right">₹ {gstAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-2">
            <div className="flex justify-between font-medium">
              <span>Total Amount Payable</span>
              <span>₹ {totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-[#B29792] p-6">
          <h2 className="text-lg font-medium mb-4">Leave a Review</h2>
          <form onSubmit={handleSubmitReview}>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Write here..."
              className="w-full h-32 p-3 rounded-lg bg-white resize-none mb-3"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#4E3E3B] text-white px-6 py-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <button
          type="button"
          onClick={() => {console.log('Payment process initiated')}}
          className="w-full bg-[#4E3E3B] text-white p-4 rounded-xl"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;

