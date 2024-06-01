
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/home/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/home/transactions">Transactions</NavLink></li>
        <li><NavLink to="/home/balance-sheet">Balance Sheet</NavLink></li>
        <li><NavLink to="/home/reports">Reports</NavLink></li>
        {/* <li><NavLink to="/home/add-new">Add New</NavLink></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
