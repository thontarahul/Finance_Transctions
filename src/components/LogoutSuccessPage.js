import React from 'react';
import { Link } from 'react-router-dom';
import './LogoutSuccessPage.css';

const LogoutSuccessPage = () => {
  return (
    <div className="logout-success-container">
      <h2>You have successfully logged out!</h2>
      <Link to="/login" className="login-link">Log in again</Link>
    </div>
  );
};

export default LogoutSuccessPage;
