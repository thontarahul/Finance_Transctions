// import React from 'react'
// import Header from '../Header/Header';


// function HomePage() {
//   return (
//     <div>
//      <Header/>
//       <center>
//         <h1>Welcome</h1>
//       </center>
    

//     </div>
//   )
// }

// export default HomePage



// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Dashboard from '../Sidebar/Dashboard/Dashboard';
// import Transactions from '../Sidebar/Dashboard/Transactions/Transactions';
// import BalanceSheet from '../Sidebar/BalanceSheet/BalanceSheet';
// import Reports from '../Sidebar/Reports/Reports';
// import AddNew from '../Sidebar/Dashboard/Transactions/AddNew';
// import Navbar from '../Sidebar/Navbar/Navbar';
// import './HomePage.css';

// function HomePage() {
//   return (
//     <Router>
//       <div style={{ display: 'flex' }}>
//         <Navbar />
//         <div style={{ marginLeft: '240px', padding: '20px', width: '100%' }}>
//           <Routes>
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/transactions" element={<Transactions />} />
//             <Route path="/balance-sheet" element={<BalanceSheet />} />
//             <Route path="/reports" element={<Reports />} />
//             <Route path="/add-new" element={<AddNew />} />
//             <Route path="/" element={<Dashboard />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default HomePage;



import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../Sidebar/Dashboard/Dashboard';
import Transactions from '../Sidebar/Dashboard/Transactions/Transactions';
import BalanceSheet from '../Sidebar/BalanceSheet/BalanceSheet';
import Reports from '../Sidebar/Reports/Reports';
import AddNew from '../Sidebar/Dashboard/Transactions/AddNew';
import Navbar from '../Sidebar/Navbar/Navbar';

function HomePage() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Navbar />
        <div style={{ marginLeft: '240px', padding: '20px', width: '100%' }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions transactions={transactions} />} />
            <Route path="/balance-sheet" element={<BalanceSheet />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/add-new" element={<AddNew addTransaction={addTransaction} />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default HomePage;
