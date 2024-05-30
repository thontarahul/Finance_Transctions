import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import HomePage from './components/HomePage';
import LogoutSuccessPage from './components/LogoutSuccessPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/logout-success" element={<LogoutSuccessPage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LoginPage from './components/LoginPage';
// import Header from './components/Header';
// import LogoutSuccessPage from './components/LogoutSuccessPage';


// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/logout-success" element={<LogoutSuccessPage />} />
//         {/* Add other routes as necessary */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
