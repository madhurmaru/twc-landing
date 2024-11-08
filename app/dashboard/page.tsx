'use client';

import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from 'recharts';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const revenueData = [
  { name: '1', Sales: 4000, Profit: 2400 },
  { name: '5', Sales: 3000, Profit: 1398 },
  { name: '10', Sales: 2000, Profit: 9800 },
  { name: '15', Sales: 2780, Profit: 3908 },
  { name: '20', Sales: 1890, Profit: 4800 },
  { name: '25', Sales: 2390, Profit: 3800 },
  { name: '30', Sales: 3490, Profit: 4300 },
];

const customerData = [
  { name: 'New Customers', value: 34249 },
  { name: 'Repeated', value: 5420 },
];

const orderDivisionData = [
  { name: 'Starters', value: 2000 },
  { name: 'Main course', value: 2000 },
  { name: 'Desserts', value: 2000 },
  { name: 'Beverages', value: 2000 },
  { name: 'Alcohol', value: 2000 },
];

const footstepData = [
  { name: 'Jun', value: 400 },
  { name: 'Jul', value: 300 },
  { name: 'Aug', value: 200 },
  { name: 'Sep', value: 278 },
  { name: 'Oct', value: 189 },
];

const COLORS = ['#6B8AF4', '#FF7F6B', '#96D160', '#FFB572', '#FF8FD2'];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f5f1eb] p-6 font-serif">
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="The Waiter Company Logo"
              width={150}
              height={50}
              className="h-8 lg:h-10 w-auto"
            />
          </Link>
          <span className="text-xl text-gray-400">×</span>
          <span className="text-xl">Badshah&apos;s Kitchen</span>
        </div>
        <div className="text-right">
          <h2 className="text-xl">Dashboard</h2>
          <p className="text-sm text-gray-600">
            Saturday, November, 2024
          </p>
        </div>
      </header>

     

      <div className="flex justify-between items-center mb-6">
         <h2 className="text-lg mb-4">Today&apos;s Overview</h2>
         <div className="flex gap-4">
            <button className="px-4 py-1.5 border border-gray-200 rounded-md text-sm bg-white">
              List of Tables
            </button>
            <button className="px-4 py-1.5 border border-gray-200 rounded-md text-sm bg-white">
              Restaurant&apos;s Menu
            </button>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <h3 className="text-sm text-black mb-1">Total Orders</h3>
          <p className="text-2xl font-normal text-[#C99E5A]">200</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <h3 className="text-sm text-black mb-1">Completed Orders</h3>
          <p className="text-2xl font-normal text-[#C99E5A]">170</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <h3 className="text-sm text-black mb-1">Pending Orders</h3>
          <p className="text-2xl font-normal text-[#C99E5A]">30</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <h3 className="text-sm text-black mb-1">Total Sales</h3>
          <p className="text-2xl font-normal text-[#C99E5A]">50,000</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <h3 className="text-sm text-black mb-1">Total Profit</h3>
          <p className="text-2xl font-normal text-[#C99E5A]">22,000</p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] mb-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl">Revenue</h3>
          <div className="flex gap-2">
            {['Yearly', 'Monthly', 'Weekly', 'Daily'].map((period) => (
              <button
                key={period}
                className={`px-3 py-1 text-sm rounded-md transition-colors
                  ${period === 'Monthly' 
                    ? 'bg-[#C99E5A]' 
                    : 'bg-gray-100'
                  }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={revenueData}>
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF7F6B" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#FF7F6B" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#B196FF" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#B196FF" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip />
            <Area 
              type="monotone" 
              dataKey="Sales" 
              stroke="#FF7F6B" 
              fill="url(#colorSales)"
              strokeWidth={2}
            />
            <Area 
              type="monotone" 
              dataKey="Profit" 
              stroke="#B196FF" 
              fill="url(#colorProfit)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <h3 className="text-xl mb-6">Customers</h3>
          <div className="flex justify-center">
            <PieChart width={200} height={200}>
              <Pie
                data={customerData}
                cx={100}
                cy={100}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {customerData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={['#6B8AF4', '#E2E8FF'][index]} />
                ))}
              </Pie>
            </PieChart>
          </div>
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <span className="text-sm" style={{ color: 'black' }}>New Customers</span>
              <span className="text-2xl font-normal" style={{ color: '#6B8AF4' }}>34,249</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm" style={{ color: 'black' }}>Repeated</span>
              <span className="text-2xl font-normal" style={{ color: '#C0D2F0' }}>5,420</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <h3 className="text-xl mb-6">Order Division</h3>
          <div className="flex justify-center">
            <PieChart width={200} height={200}>
              <Pie
                data={orderDivisionData}
                cx={100}
                cy={100}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {orderDivisionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {orderDivisionData.map((item, index) => (
              <div key={index}>
                <p className="text-sm" style={{ color: COLORS[index] }}>{item.name}</p>
                <p className="text-lg font-normal" style={{ color: COLORS[index] }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <Card className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
      <CardHeader>
        <CardTitle className="text-xl font-medium text-center">Footstep/month</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={footstepData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
              <XAxis 
                dataKey="name" 
                stroke="#9ca3af"
                fontSize={12}
                tickLine={false}
              />
              <YAxis 
                stroke="#9ca3af"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#6B8AF4"
                strokeWidth={2}
                dot={{ stroke: '#6B8AF4', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
    </div>
  </div>
);
}