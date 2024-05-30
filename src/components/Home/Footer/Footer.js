import React from 'react';
import './Footer.css'; // Assuming you will have some CSS
 
const Footer = () => {
    return (
<footer className="footer">
<div className="footer-content">
<p>&copy; 2024 Your Company. All rights reserved.</p>
<p>Contact us: contact@yourcompany.com</p>
<div className="footer-links">
<a href="/privacy-policy">Privacy Policy</a>
<a href="/terms-of-service">Terms of Service</a>
</div>
</div>
</footer>
    );
};
 
export default Footer;