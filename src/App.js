// sample text
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
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import LoginPage from "./components/AuthService/Login_Page/LoginPage";
// import SignupPage from "./components/AuthService/Signup_Page/SignupPage";
// import HomePage from "./components/Home/Home_Page/HomePage";
// import LogoutPage from "./components/AuthService/Auth_Service/Logout_Page/LogoutPage";
// import AddNew from "./components/Home/Sidebar/Dashboard/Transactions/AddNew";
// import Layout from "./components/Home/Layout/Layout"; // Import the Layout component

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/home/*" element={<Layout><HomePage /></Layout>} /> 
//         <Route path="/logoutPage" element={<LogoutPage />} />
//         <Route path="add-new" element={<AddNew addTransaction={addTransaction} />}/>
//         <Route path="/add-new/:id" element={<AddNew />} />{/* Direct route for AddNew */}
//         <Route path="/" element={<Navigate to="/login" />} />
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
// import AddNew from "./components/Home/Sidebar/Dashboard/Transactions/AddNew";
// import Layout from "./components/Home/Layout/Layout"; // Import the Layout component
// import SimpleLayout from "./components/SimpleLayout/SimpleLayout"; // Import the SimpleLayout component

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/home/*" element={<Layout><HomePage /></Layout>} />
//         <Route path="/logoutPage" element={<LogoutPage />} />
//         <Route path="/add-new" element={<SimpleLayout><AddNew /></SimpleLayout>} /> {/* Route for adding new */}
//         <Route path="/add-new/:id" element={<SimpleLayout><AddNew /></SimpleLayout>} /> {/* Route for editing */}
//         <Route path="/" element={<Navigate to="/login" />} />
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
import AddNew from "./components/Home/Sidebar/Dashboard/Transactions/AddNew";
import Layout from "./components/Home/Layout/Layout"; // Import the Layout component
import ForgotPassword from "./components/ForgotPassword_Page/ForgotPassword";
import VerificationPage from "./components/AuthService/Auth_Service/VerificationPage/VerificationPage"; // Import VerificationPage
import ResetPassword from "./components/ForgotPassword_Page/ResetPassword";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home/*" element={<Layout><HomePage /></Layout>} />
        <Route path="/logoutPage" element={<LogoutPage />} />
        <Route path="add-new" element={<AddNew />}/>
        <Route path="add-new/:id" element={<AddNew />}/>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verification" element={<VerificationPage />} /> {/* Add the VerificationPage route */}
        <Route path="/reset-password" element={<ResetPassword />}/>
      </Routes>
    </Router>
  );
}

export default App

