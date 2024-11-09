import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ordersData = [
  {
    id: 1,
    image: "/images/chips-fries.jpg",
    name: "Chips Fries",
    price: "₹40",
    date: "02/11/24",
    time: "9:15pm",
    tableNo: "15",
    contactDetails: "My Name! / 999xxxxxx"
  },
  {
    id: 2,
    image: "/images/chicken-nuggets.jpg",
    name: "Chicken Nuggets",
    price: "₹80",
    date: "02/11/24",
    time: "8:35pm",
    tableNo: "15",
    contactDetails: "My Name! / 999xxxxxx"
  },
];

interface OrdersDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const OrdersDialog: React.FC<OrdersDialogProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-medium">Total Orders</DialogTitle>
        </DialogHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Table No.</TableHead>
              <TableHead>Contact Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ordersData.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <img 
                    src="/api/placeholder/60/60"
                    alt={order.name}
                    className="w-12 h-12 rounded-md object-cover"
                  />
                </TableCell>
                <TableCell>{order.name}</TableCell>
                <TableCell>{order.price}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.time}</TableCell>
                <TableCell>{order.tableNo}</TableCell>
                <TableCell>{order.contactDetails}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
};

export default OrdersDialog;