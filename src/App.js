// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import LoginPage from "./components/AuthService/Login_Page/LoginPage";
// import SignupPage from "./components/AuthService/Signup_Page/SignupPage";
// import HomePage from "./components/Home/Home_Page/HomePage";
// import LogoutPage from "./components/AuthService/Auth_Service/Logout_Page/LogoutPage";


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/home/*" element={<HomePage />} />
//         <Route path="/" element={<Navigate to="/login" />} />
//         <Route path="/logoutPage" element={<LogoutPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import LoginPage from "./components/AuthService/Login_Page/LoginPage";
// import SignupPage from "./components/AuthService/Signup_Page/SignupPage";
// import HomePage from "./components/Home/Home_Page/HomePage";
// import LogoutPage from "./components/AuthService/Auth_Service/Logout_Page/LogoutPage";
// import ForgotPassword from "./components/ForgotPassword_Page/ForgotPassword"

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/home/*" element={<HomePage />} />
//         <Route path="/" element={<Navigate to="/login" />} />
//         <Route path="/logoutPage" element={<LogoutPage />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Add the ForgotPassword route */}
//       </Routes>
//     </Router>
//   );
// }
// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/AuthService/Login_Page/LoginPage";
import SignupPage from "./components/AuthService/Signup_Page/SignupPage";
import HomePage from "./components/Home/Home_Page/HomePage";
import LogoutPage from "./components/AuthService/Auth_Service/Logout_Page/LogoutPage";
import ForgotPassword from "./components/ForgotPassword_Page/ForgotPassword";
import VerificationPage from "./components/AuthService/Auth_Service/VerificationPage/VerificationPage"; // Import VerificationPage
import ResetPassword from "./components/ForgotPassword_Page/ResetPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home/*" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/logoutPage" element={<LogoutPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verification" element={<VerificationPage />} /> {/* Add the VerificationPage route */}
        <Route path="/reset-password" element={<ResetPassword />}/>
      </Routes>
    </Router>
  );
}

export default App;
