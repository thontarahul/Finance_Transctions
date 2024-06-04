// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './ForgotPassword.css';

// function ForgotPassword() {
//   const [email, setEmail] = useState('');

//   const handleInputChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Submitted:', email);
//   };

//   return (
//     <div className="forgot-password-container">
//       <div className="forgot-password-box">
//         <h2>Forget your password</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <input 
//               type="email" 
//               placeholder="Email" 
//               value={email} 
//               onChange={handleInputChange} 
//               required 
//             />
//           </div>
//           <button type="submit" className="forgot-password-button">
//             Continue
//           </button>
//         </form>
//         <p>
//           Remember your password? <Link to="/login" className="login-link">Log in</Link>
//         </p>
//       </div> 
//     </div>
//   );
// }

// export default ForgotPassword;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

function ForgotPassword() { 
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://192.168.0.113:8082/api/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // Assuming the response contains a verification token or similar data
        const data = await response.json();
        navigate('/verification', { state: { email, token: data.token } }); // Navigate to the verification page
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <h2>Forget your password</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          <button type="submit" className="forgot-password-button">
            Continue
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <p>
          Remember your password? <Link to="/login" className="login-link">Log in</Link>
        </p>
      </div>
    </div>
  );
} 
 
export default ForgotPassword;
