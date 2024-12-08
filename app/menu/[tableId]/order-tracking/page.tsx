'use client';

import { useState, useEffect, use, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import OrderStatus from '@/components/OrderStatus';
import Header from '@/components/Header';

interface OrderTrackingPageProps {
  params: Promise<{ tableId: string }>;
}

export default function OrderTrackingPage({ params }: OrderTrackingPageProps) {
  const router = useRouter();
  const resolvedParams = use(params);
  const [timeState, setTimeState] = useState({
    currentTime: new Date(),
    estimatedTime: new Date(Date.now() + 20 * 60000)
  });

  const runningBill = 150.00;
  const totalBill = runningBill;

  useEffect(() => {
    // Update time every minute
    const timer = setInterval(() => {
      const newCurrentTime = new Date();
      setTimeState({
        currentTime: newCurrentTime,
        estimatedTime: new Date(newCurrentTime.getTime() + 20 * 60000)
      });
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Suspense fallback={null}>
      <div className="min-h-screen bg-[#f5f1eb] p-4 flex flex-col gap-4">
        <Header tableId={resolvedParams.tableId} />

        {/* Main Content */}
        <div className="rounded-2xl bg-[#FFFFFF] p-6">
          <h1 className="text-2xl font-serif mb-6 text-center">Thank you for your order!</h1>

          {/* Estimated Time */}
          <div className="bg-[#4E3E3B] text-white rounded-lg p-4 mb-8">
            <div className="text-center">
              <div className="text-sm mb-1">Estimated order time</div>
              <div className="text-xl">
                {timeState.estimatedTime.toLocaleTimeString([], {
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
        <div className="rounded-2xl bg-[#FFFFFF] p-6">
          <div className="mb-6 space-y-3 flex justify-between items-center">
            <span className="text-lg font-medium">Total Bill</span>
            <span className="text-lg font-medium">₹ {totalBill.toFixed(2)}</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => router.push(`/checkout/${resolvedParams.tableId}`)}
              className="w-full bg-[#9D8480] text-white py-3 rounded-md hover:bg-[#3a2e2c] transition-colors"
            >
              Check Out
            </button>
            <button
              onClick={() => router.push(`/menu/${resolvedParams.tableId}`)}
              className="w-full bg-[#9D8480] text-white py-3 rounded-md hover:bg-[#3a2e2c] transition-colors"
            >
              Back to home
            </button>
          </div>
        </div>
      </div>
    </Suspense>
  );
}