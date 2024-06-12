// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './ForgotPassword.css';
 
// function ForgotPassword() {
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
 
//   const handleInputChange = (e) => {
//     setEmail(e.target.value);
//   };
 
//     const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
 
//     try {
//       const response = await fetch('http://192.168.0.113:8082/api/forgot-password', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });
     
//       if (response.ok) {
//           const data = await response.json();
//           console.log('Response data:', data);
//           localStorage.setItem('email_response',data.email)
//           navigate('/verification', { state: { email} });
//       } else {
//         const errorData = await response.json();
//         console.error('Server responded with an error:', errorData); // Log the error response
//         setError(errorData.message || 'An error occurred. Please try again.');
//       }
//     } catch (error) {
//       console.error('Fetch error:', error); // Log the fetch error
//       setError('An error occurred. Please try again.');
//     }
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
//         {error && <p className="error-message">{error}</p>}
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
import 'tailwindcss/tailwind.css';

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
        const data = await response.json();
        console.log('Response data:', data);
        localStorage.setItem('email_response', data.email);
        navigate('/verification', { state: { email } });
      } else {
        const errorData = await response.json();
        console.error('Server responded with an error:', errorData); // Log the error response
        setError(errorData.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Fetch error:', error); // Log the fetch error
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-[3.5rem] rounded-[0.75rem] shadow-md w-full max-w-sm h-[25rem]">
        <h2 className="text-2xl pt-4 pb-[0.5rem] flex items-center justify-center font-bold mb-4">Forget your password</h2>
        <p classaName= "pb-4 text-gray-700">Enter your registered email address</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-900 text-white p-2 mt-[0.5rem] rounded hover:bg-blue-900 transition duration-200"
          >
            Continue
          </button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        <p className="mt-4">
          Remember your password? <Link to="/login" className="text-blue-500 hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;

 