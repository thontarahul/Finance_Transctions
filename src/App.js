import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/AuthService/Login_Page/LoginPage";
import SignupPage from "./components/AuthService/Signup_Page/SignupPage";
import HomePage from "./components/Home/Home_Page/HomePage";
import LogoutSuccessPage from './components/LogoutSuccessPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home/*" element={<HomePage />} /> {/* Notice the /* to match nested routes */}
        <Route path="/logout-success" element={<LogoutSuccessPage />} />
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
