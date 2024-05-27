import React, { useState } from "react";
import authService from "./authService";
import { Link, useNavigate } from "react-router-dom";
import SignupPageimg from "../Assets/Images/SignupPageimg.png";
import "./SignupPage.css"; // Importing the CSS for styling
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await authService.register(username, email, password);
      navigate("/login");  // Redirect to login after successful registration
    } catch (error) {
      setError("Failed to register");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <img
          src={SignupPageimg.png}// Update with the path to your logo image
          alt="Financial Works Logo"
          className="signup-logo"
        />
      
        <h2 className="signup-heading">Sign Up</h2>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
            />
        
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Re enter password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input-field"
              required
            />
        
          </div>
          <button type="submit" className="signup-button">
            Sign-up
          </button>
          <p className="login-prompt">
            Have an account? <Link to="/login" className="login-link">Login now</Link>
          </p>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
