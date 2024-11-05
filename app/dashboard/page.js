'use client';
import React, { useState, useEffect } from 'react';
import './Dashboard.css'; 
import A from './components/A'; 
import B from './components/B';
import TotalOrders from './components/TotalOrders'; 
import CompletedOrders from './components/CompletedOrders';
import PendingOrders from './components/PendingOrders.js';
import TotalSales from './components/TotalSales';
import TotalProfit from './components/TotalProfit';
import logo from './images/logo.png'
import Image from 'next/image';
import icon from './images/icon.png';

const Dashboard = () => {
  // Mock data for "Today's Overview"
  const overviewData = {
    totalOrders: 200,
    completedOrders: 170,
    pendingOrders: 30,
    totalSales: 50000,
    totalProfit: 22000,
  };

  // Get current date
  const [currentDate, setCurrentDate] = useState('');
  const [activeComponent, setActiveComponent] = useState(null);

  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleDateString('en-GB', {
      day: 'numeric', month: 'short', year: 'numeric',
    }));
  }, []);

  const handleCardClick = (component) => {
    setActiveComponent(component);
  };

  const showComponentA = () => {
    setActiveComponent('A');
  };

  const showComponentB = () => {
    setActiveComponent('B');
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
      <div className="dashboard-header">
        <div className='logo'><Image src={logo} alt='logo' style={{width: '173px', height: '82px'}}></Image></div>
        <div className='name' style={{marginLeft : '-10px'}}></div><Image src={icon} alt='name' style={{width: '17px'}}></Image><p>Badshah's Kitchen</p></div>
        <h2>Dashboard</h2>
      </header>
      <header className="dashboard-header"style={{marginTop : '0px',marginBottom : '30px'}}>
        .
        <span>{currentDate}</span>
      </header>

      <header className="dashboard-header" style={{marginLeft : '10px', marginBottom : '30px'}}>
      <h2>Today's Overview</h2>
        <div className='top-button'>
          <button style={{marginRight : '15px'}} className={`card ${activeComponent === 'A' ? 'active' : ''}`}  onClick={showComponentA}>List of Tables</button>
          <button className={`card ${activeComponent === 'B' ? 'active' : ''}`} onClick={showComponentB}>Restaurant's Menu</button>
        </div>
      </header>
      
      <section className="overview-section" style={{marginLeft : '10px'}}>
      <div className={`card ${activeComponent === 'TotalOrders' ? 'active' : ''}`} onClick={() => handleCardClick('TotalOrders')}>
          <h3>Total Orders</h3>
          <p>{overviewData.totalOrders}</p>
        </div>
        <div className={`card ${activeComponent === 'CompletedOrders' ? 'active' : ''}`} onClick={() => handleCardClick('CompletedOrders')}>
          <h3>Completed Orders</h3>
          <p>{overviewData.completedOrders}</p>
        </div>
        <div className={`card ${activeComponent === 'PendingOrders' ? 'active' : ''}`}  onClick={() => handleCardClick('PendingOrders')}>
          <h3>Pending Orders</h3>
          <p>{overviewData.pendingOrders}</p>
        </div>
        <div className={`card ${activeComponent === 'TotalSales' ? 'active' : ''}`}  onClick={() => handleCardClick('TotalSales')}>
          <h3>Total Sales</h3>
          <p>{overviewData.totalSales}</p>
        </div>
        <div className={`card ${activeComponent === 'TotalProfit' ? 'active' : ''}`}  onClick={() => handleCardClick('TotalProfit')}>
          <h3>Total Profit</h3>
          <p>{overviewData.totalProfit}</p>
        </div>
      </section>

      <div className='bottom'>
        {activeComponent === 'A' && <A />}
        {activeComponent === 'B' && <B />}
        {activeComponent === 'TotalOrders' && <TotalOrders />} 
        {activeComponent === 'CompletedOrders' && <CompletedOrders />}
        {activeComponent === 'PendingOrders' && <PendingOrders />}
        {activeComponent === 'TotalSales' && <TotalSales />}
        {activeComponent === 'TotalProfit' && <TotalProfit />}
      </div>
    </div>
  );
};

export default Dashboard;
