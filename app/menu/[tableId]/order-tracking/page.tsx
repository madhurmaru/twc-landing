'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import OrderStatus from '@/components/OrderStatus';
import Header from '@/components/Header';

interface OrderTrackingPageProps {
  params: { tableId: string };
}

export default function OrderTrackingPage({ params }: OrderTrackingPageProps) {
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [estimatedTime, setEstimatedTime] = useState(new Date(currentTime.getTime() + 20 * 60000)); // 20 minutes from now

  const runningBill = 150.00; // Static value for demonstration
  const totalBill = runningBill;

  useEffect(() => {
    // Update current time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Update estimated time when current time changes
    setEstimatedTime(new Date(currentTime.getTime() + 20 * 60000));
  }, [currentTime]);

  return (
    <div className="min-h-screen bg-[#f5f1eb] p-4 flex flex-col gap-4">
      <Header tableId={params.tableId} />

      {/* Main Content */}
      <div className="rounded-2xl bg-[#B29792] p-6">
        <h1 className="text-2xl font-serif mb-6 text-center">Thank you for your order!</h1>

        {/* Estimated Time */}
        <div className="bg-[#4E3E3B] text-white rounded-lg p-4 mb-8">
          <div className="text-center">
            <div className="text-sm mb-1">Estimated order time</div>
            <div className="text-xl">
              {estimatedTime.toLocaleTimeString([], { 
                hour: 'numeric',
                minute: '2-digit',
                hour12: true 
              })}
            </div>
          </div>
        </div>

        <OrderStatus 
          orderId="123"
          cookName="Mr Cook"
        />
      </div>

      {/* Bill Details */}
      <div className="rounded-2xl bg-[#B29792] p-6">
        <div className="mb-6 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-lg">Running Bill</span>
            <span className="text-lg">₹ {runningBill.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-gray-300">
            <span className="text-lg font-medium">Total Bill</span>
            <span className="text-lg font-medium">₹ {totalBill.toFixed(2)}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => router.push(`/checkout/${params.tableId}`)}
            className="w-full bg-[#4E3E3B] text-white py-3 rounded-md hover:bg-[#3a2e2c] transition-colors"
          >
            Check Out
          </button>
          <button 
            onClick={() => router.push(`/menu/${params.tableId}`)}
            className="w-full bg-[#4E3E3B] text-white py-3 rounded-md hover:bg-[#3a2e2c] transition-colors"
          >
            Back to home
          </button>
        </div>
      </div>
    </div>
  );
}