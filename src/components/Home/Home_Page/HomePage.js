
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../Sidebar/Dashboard/Dashboard';
import Transactions from '../Sidebar/Dashboard/Transactions/Transactions';
import BalanceSheet from '../Sidebar/BalanceSheet/BalanceSheet';
import Reports from '../Sidebar/Reports/Reports';
import AddNew from '../Sidebar/Dashboard/Transactions/AddNew';
import Navbar from '../Sidebar/Navbar/Navbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import './HomePage.css'

 
function HomePage() {
  const [transactions, setTransactions] = useState([]);
 
  useEffect(() => {
    const savedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
    setTransactions(savedTransactions);
  }, []);
 
  const addTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => {
      const existingTransactionIndex = prevTransactions.findIndex(t => t.id === newTransaction.id);
      let updatedTransactions;
      if (existingTransactionIndex > -1) {
        updatedTransactions = [
          ...prevTransactions.slice(0, existingTransactionIndex),
          newTransaction,
          ...prevTransactions.slice(existingTransactionIndex + 1)
        ];
      } else {
        updatedTransactions = [...prevTransactions, newTransaction];
      }
      localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
      return updatedTransactions;
    });
  };
  

return (
  <div className="container">
  <Header />
  <div className="main-content">
  <Navbar />
  <div className="content-wrapper">
  <Routes>
  <Route path="dashboard" element={<Dashboard />} />
  <Route path="transactions" element={<Transactions transactions={transactions} setTransactions={setTransactions} />} />
  <Route path="balance-sheet" element={<BalanceSheet />} />
  <Route path="reports" element={<Reports />} />
  <Route path="add-new" element={<AddNew addTransaction={addTransaction} />} />
  <Route path="add-new/:id" element={<AddNew />} />
  <Route path="/" element={<Navigate to="transactions" />} />
  </Routes>
  <Footer />
  </div>
  </div>
  </div>
    );
  }
export default HomePage;


