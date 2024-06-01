// HomePage.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Home/Header/Header';
import Sidebar from './Home/Sidebar/Sidebar';
import Footer from './Home/Footer/Footer';
import Dashboard from './Home/Dashboard/Dashboard';
import Transactions from './Home/Transactions/Transactions';
import BalanceSheet from './Home/BalanceSheet/BalanceSheet';
import Reports from './Home/Reports/Reports';
import Settings from './Home/Settings/Settings';

const HomePage = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="content-wrapper"> 
        <Sidebar /> 
        <div className="content">    
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/balance-sheet" element={<BalanceSheet />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

