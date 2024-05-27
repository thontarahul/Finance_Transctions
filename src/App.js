import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import HomePage from './components/HomePage';
// import ForgotPasswordPage from './components/ForgotPasswordPage'; // Import the ForgotPasswordPage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/forgot-password" element={<ForgotPasswordPage />} /> Route for ForgotPasswordPage */}
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;


