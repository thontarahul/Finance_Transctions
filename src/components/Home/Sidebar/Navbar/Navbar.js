// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// function Navbar() {
//   return (
//     <aside className="Navbar">
//       <nav>
//         <ul>
//           <li><Link to="/home/dashboard" activeClassName="active-link">Dashboard</Link></li>
//           <li><Link to="/home/transactions" activeClassName="active-link">Transactions</Link></li>
//           <li><Link to="/home/balance-sheet" activeClassName="active-link">Balance Sheet</Link></li>
//           <li><Link to="/home/reports" activeClassName="active-link">Reports</Link></li>
//           <li><Link to="/home/settings" activeClassName="active-link">Settings</Link></li>
//           </ul>
//       </nav>
//     </aside>
//   );
// }

// export default Navbar;




// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <aside className="bg-white h-[calc(100vh-78px)] w-[200px] fixed top-[78px] left-0 p-5 flex flex-col shadow-sm border-r-2 mt-1">
//       <nav>
//         <ul className="list-none p-0 m-0">
//           <li className="mb-5">
//             <Link to="/home/dashboard" className="block p-2 rounded hover:bg-gray-200">Dashboard</Link>
//           </li>
//           <li className="mb-5">
//             <Link to="/home/transactions" className="block p-2 rounded hover:bg-gray-200">Transactions</Link>
//           </li>
//           <li className="mb-5">
//             <Link to="/home/balance-sheet" className="block p-2 rounded hover:bg-gray-200">Balance Sheet</Link>
//           </li>
//           <li className="mb-5">
//             <Link to="/home/reports" className="block p-2 rounded hover:bg-gray-200">Reports</Link>
//           </li>
//           <li className="mb-5">
//             <Link to="/home/settings" className="block p-2 rounded hover:bg-gray-200">Settings</Link>
//           </li>
//         </ul>
//       </nav>
//     </aside>
//   );
// }

// export default Navbar;



import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <aside className="bg-white h-[calc(100vh-78px)] w-[200px] fixed top-[78px] left-0 p-5 flex flex-col shadow-sm border-r-2 mt-1">
      <nav>
        <ul className="list-none p-0 m-0">
          <li className="mb-5">
            <Link to="/home/dashboard" className="block p-2 rounded hover:bg-gray-200">Dashboard</Link>
          </li>
          <li className="mb-5">
            <Link to="/home/transactions" className="block p-2 rounded hover:bg-gray-200">Transactions</Link>
          </li>
          <li className="mb-5">
            <Link to="/home/balance-sheet" className="block p-2 rounded hover:bg-gray-200">Balance Sheet</Link>
          </li>
          <li className="mb-5">
            <Link to="/home/reports" className="block p-2 rounded hover:bg-gray-200">Reports</Link>
          </li>
          <li className="mb-5">
            <Link to="/home/settings" className="block p-2 rounded hover:bg-gray-200">Settings</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Navbar;
