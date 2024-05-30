// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthService } from "../Auth_Service/AuthService"; 
// import loginImg from "../../../Assets/images/login dataworks.jpg";
// import "./LoginPage.css";
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import VisibilityIcon from '@mui/icons-material/Visibility';

// function LoginPage() {
//   const [userName, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     try {
//       const data = await AuthService.login(userName, password);
//       console.log(data.token);
//       if (data.token) {
//         AuthService.setToken(data.token);
//         setError("Successfully logged in!");
//         setTimeout(() => navigate("/home")); // Redirect after 2 seconds
//       } else {
//         setError("Login failed");
//       }
//     } catch (error) {
//       setError("Check your credentials and try again");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <img
//           src={loginImg}
//           alt="Financial Works Logo"
//           className="logo"
//         />
//         <h2>Log in</h2>
//         <form onSubmit={handleLogin}>
//           <div className="input-group">
//             <input
//               type="text"
//               placeholder="Enter Username"
//               value={userName}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="input-group password-input">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             {showPassword ? (
//               <VisibilityIcon
//                 className="password-toggle-icon"
//                 onClick={() => setShowPassword(!showPassword)}
//               />
//             ) : (
//               <VisibilityOffIcon
//                 className="password-toggle-icon"
//                 onClick={() => setShowPassword(!showPassword)}
//               />
//             )}
//           </div>
//           <button type="submit" className="login-button">
//             Log in
//           </button>
//           <p>
//             Not a member? <Link to="/signup" className="signup-link">Sign-up now</Link>
//           </p>
//           {error && <p className="error-message">{error}</p>}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthService } from "../Auth_Service/AuthService"
import loginImg from "../../../Assets/images/login dataworks.jpg";
import "./LoginPage.css";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

function LoginPage() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const data = await AuthService.login(userName, password);
      console.log(data.token);
      if (data.token) {
        AuthService.setToken(data.token);
        setError("Successfully logged in!");
        setTimeout(() => navigate("/home"), 2000); // Redirect after 2 seconds
      } else {
        setError("Login failed");
      }
    } catch (error) {
      setError("Check your credentials and try again");
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
              placeholder="Enter Username"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {showPassword ? (
              <VisibilityIcon
                className="password-toggle-icon"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <VisibilityOffIcon
                className="password-toggle-icon"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
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
