import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "./authService";
import loginImg from '../Assets/images/login dataworks.jpg';
import "./LoginPage.css";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await authService.login(username, password);
      navigate("/home");
    } catch (error) {
      setError("Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img
          src={loginImg}
          alt="Financial Works Logo"
          className="logo"
        />
        <h2>Log in</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter your email ID"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <VisibilityOffIcon
              className="password-toggle-icon"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          <div className="options">
            <Link to="/forgot-password" className="forgot-password">
              Forget password?
            </Link>
          </div>
          <button type="submit" className="login-button">
            Log in
          </button>
          <p>
            Not a member? <Link to="/signup" className="signup-link">Sign-up now</Link>
          </p>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
