import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/AuthService/Login_Page/LoginPage";
import SignupPage from "./components/AuthService/Signup_Page/SignupPage";
import HomePage from "./components/Home/Home_Page/HomePage";
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

// import React from "react";
// import HomePage from './components/Home/Home_Page/HomePage'

// function App() {
//   return (
//     <div>
//        <HomePage/>
//     </div>
//   )
// }

// export default App


