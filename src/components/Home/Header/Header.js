import React from 'react';
import './Header.css';
import HomeImage from '../../../Assets/images/Home_img.jpg';

function Header({ leftImage, rightImage, fullName, designation }) {
  return (
    <header className="header">
      <div className="left-section">
        <img src={HomeImage} alt="Left Logo" className="left-image" />
      </div>
      <div className="right-section">
        <img src={rightImage} alt="Profile" className="profile-image" />
        <div className="text-section">
          <div className="full-name">{fullName}</div>
          <div className="designation">{designation}</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
