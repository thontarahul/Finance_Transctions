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
// import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import report_images from'../../../../Assets/images/reports.png'
import Balance_sheet from '../../../../Assets/images/BalanceSheet.png';
import transactions from '../../../../Assets/images/Transaction.png';
import Dashboard from '../../../../Assets/images/Dashboard.png';
import Settings from '../../../../Assets/images/setting.png';
 
function Navbar() {
  return (
    <aside className="bg-white h-[calc(100vh-78px)] w-[200px] fixed top-[78px] left-0 p-5 flex flex-col shadow-sm border-r-2 mt-1">
      <nav>
        <ul className="list-none p-0 m-0">
          <li className="mb-2">
              <Link to="/home/dashboard" className="flex items-center p-2 mt-8 rounded hover:bg-pink-50">
                <img src={Dashboard} alt="Balance_sheet" className="h-6 w-6 mr-2" />
                <span className="hover:text-blue-800">Dashboard</span>
              </Link>
          </li>
         
            <li className="mb-2">
              <Link to="/home/transactions" className="flex items-center p-2 rounded hover:bg-pink-50">
                <img src={transactions} alt="Balance_sheet" className="h-6 w-6 mr-2" />
                <span className="hover:text-blue-800">Transactions</span>
              </Link>
            </li>
           
            <li className="mb-2">
              <Link to="/home/balance-sheet" className="flex items-center p-2 rounded hover:bg-pink-50">
                <img src={Balance_sheet} alt="Balance_sheet" className="h-6 w-6 mr-2" />
                <span className="hover:text-blue-800">Balance sheet</span>
              </Link>
            </li>
            <li className="mb-2">
                <Link to="/home/reports" className="flex items-center p-2 rounded hover:bg-pink-50">
                  <img src= {report_images} alt="Reports Icon" className="h-6 w-6 mr-2" />
                  <span className="hover:text-blue-800">Reports</span>
                </Link>
            </li>
            <li className="mt-80">
                <Link to="/home/settings" className="flex items-center p-2 rounded hover:bg-pink-50">
                  <img src= {Settings} alt="setting Icon" className="h-6 w-6 mr-2" />
                  <span className="hover:text-blue-800">Settings</span>
                </Link>
            </li>
        </ul>
      </nav>
    </aside>
  );
}
 
export default Navbar;