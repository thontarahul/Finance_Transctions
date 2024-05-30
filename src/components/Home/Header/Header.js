// import React from 'react';
// import './Header.css';

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="logo">
//         <img src="logo.png" alt="Financial Works Logo" />
//       </div>
//       <div className="user-info">
//         <img src="user.jpg" alt="User" className="user-image" />
//         <div className="user-details">
//           <p>Full Name</p>
//           <p>Designation</p>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


// Header.js

// Header.js

// Header.js

import React from 'react';
import { authService } from '../../authService';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import headerimg from '../../../Assets/images/header-image.jpg';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.removeToken();
    navigate('/logout-success');
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={headerimg} alt="Financial Works Logo" />
      </div>
      <div className="user-info">
        <div className="user-details">
          <p>Full Name</p>
          <p>Designation</p>
        </div>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
