
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import LoginPage from "./components/AuthService/Login_Page/LoginPage";
// import SignupPage from "./components/AuthService/Signup_Page/SignupPage";
// import HomePage from "./components/Home/Home_Page/HomePage";
// // import LogoutSuccessPage from './components/LogoutSuccessPage';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/home/*" element={<HomePage />} />
//         {/* <Route path="/logout-success" element={<LogoutSuccessPage />} /> */}
//         <Route path="/" element={<Navigate to="/login" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/AuthService/Login_Page/LoginPage";
import SignupPage from "./components/AuthService/Signup_Page/SignupPage";
import HomePage from "./components/Home/Home_Page/HomePage";
import LogoutPage from "./components/AuthService/Auth_Service/Logout_Page/LogoutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home/*" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/logoutPage" element={<LogoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
