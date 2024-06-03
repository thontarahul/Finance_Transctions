import React from 'react';
import { AuthService } from '../../AuthService/Auth_Service/AuthService';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import headerimg from '../../../Assets/images/Home_img.jpg';

 
const Header = () => {
  const navigate = useNavigate();
 
  const handleLogout = () => {
    AuthService.clearToken();
    navigate('/LogoutPage');
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