
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
