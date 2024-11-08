'use client';

import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"

type OrderStatus = 'preparing' | 'ready' | 'delivered';

interface OrderStatusProps {
  orderId: string;
  initialStatus?: OrderStatus;
  cookName: string;
}

export default function OrderStatus({ orderId, initialStatus = 'preparing', cookName }: OrderStatusProps) {
  const [status, setStatus] = useState<OrderStatus>(initialStatus);
  const [error, setError] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    let eventSource: EventSource;

    const connectSSE = () => {
      try {
        eventSource = new EventSource(`/api/orders/${orderId}/status`);

        eventSource.onopen = () => {
          setIsConnected(true);
          setError(null);
        };

        eventSource.onmessage = (event) => {
          const data = JSON.parse(event.data);
          setStatus(data.status);
          
          toast({
            title: "Order Status Updated",
            description: `Your order is now ${data.status}`,
          });
        };

        eventSource.onerror = () => {
          setIsConnected(false);
          setError("Connection lost. Trying to reconnect...");
          eventSource.close();
          setTimeout(connectSSE, 5000);
        };
      } catch (error: unknown) {
        setError("Failed to connect to status updates: " + (error instanceof Error ? error.message : String(error)));
        setIsConnected(false);
      }
    };

    connectSSE();

    return () => {
      if (eventSource) {
        eventSource.close();
      }
    };
  }, [orderId, toast]);

  const getStatusConfig = (statusCheck: OrderStatus) => {
    const isActive = status === statusCheck;
    const isPast = (
      (status === 'ready' && statusCheck === 'preparing') ||
      (status === 'delivered' && (statusCheck === 'preparing' || statusCheck === 'ready'))
    );

    return {
      isActive,
      isPast,
      textColor: isActive || isPast ? 'text-[#4E3E3B]' : 'text-gray-500',
    };
  };

  return (
    <div className="px-6">
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {!isConnected && (
        <div className="text-yellow-600 text-sm mb-4">
          Reconnecting to status updates...
        </div>
      )}
      
      <div className="space-y-8">
        {/* Status Items */}
        <div className="flex items-center gap-3">
          <Clock className={`w-5 h-5 ${getStatusConfig('preparing').textColor}`} />
          <p className={`text-base ${getStatusConfig('preparing').textColor}`}>
            Your order is being prepared by{' '}
            <span className="font-medium text-[#4E3E3B]">{cookName}</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Clock className={`w-5 h-5 ${getStatusConfig('ready').textColor}`} />
          <p className={`text-base ${getStatusConfig('ready').textColor}`}>
            Ready for Pickup
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Clock className={`w-5 h-5 ${getStatusConfig('delivered').textColor}`} />
          <p className={`text-base ${getStatusConfig('delivered').textColor}`}>
            Delivered
          </p>
        </div>
      </div>
    </div>
  );
}