import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <aside className="navbar">
      <nav>
        
          <li><Link to="/home/dashboard" activeClassName="active-link">Dashboard</Link></li>
          <li><Link to="/home/transactions" activeClassName="active-link">Transactions</Link></li>
          <li><Link to="/home/balance-sheet" activeClassName="active-link">Balance Sheet</Link></li>
          <li><Link to="/home/reports" activeClassName="active-link">Reports</Link></li>
          <li><Link to="/home/settings" activeClassName="active-link">Settings</Link></li>
        
      </nav>
    </aside>
  );
}

export default Navbar;




// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import './Navbar.css';
 
// const Navbar = () => {
//   return (
//     <aside className="Navbar">
//       <nav>
//         <ul>
//           <li><Link to="/dashboard">Dashboard</Link></li>
//           <li><Link to="/transactions">Transactions</Link></li>
//           <li><Link to="/balance-sheet">Balance Sheet</Link></li>
//           <li><Link to="/reports">Reports</Link></li>
//           <li><Link to="/settings">Settings</Link></li>
//         </ul>
//       </nav>
//     </aside>
//   );
// };
 
// export default Navbar;
