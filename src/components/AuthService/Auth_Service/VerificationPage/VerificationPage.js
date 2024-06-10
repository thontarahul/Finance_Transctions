import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
 
const OtpInput = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const navigate = useNavigate();
  const emailpayload = localStorage.getItem('email_response');
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
 
  const handleSubmit = () => {
    const enteredOTP = otp.join('');
    fetch('http://192.168.0.113:8082/api/verify-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ otp: enteredOTP, email: emailpayload }),
    })
    .then(response => {
      if (response.ok) {
        alert('OTP verified successfully!');
        navigate('/reset-password'); // Navigate to the reset password page
      } else {
        alert('Failed to verify OTP. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to verify OTP. Please check your network connection and try again.');
    });
  };
 
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length <= 1) {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
     
      // Move focus to the next input automatically
      if (value && index < 3) {
        inputRefs[index + 1].current.focus();
      }
    }
  };
 
  return (
    <div className="flex flex-col items-center justify-center text-center h-screen bg-gray-200">
      <div className="bg-white shadow-md rounded-lg  pt-20 pb-20 pl-10 pr-10"> {/* Add styling to the wrapping div */}
        <h2 className="text-2xl font-semibold mb-3">Enter verification code</h2>
        <p className="text-gray-600 mb-6 text-sm">We have sent 4 digits of OTP to your registered email address</p>
        <form className="flex justify-center gap-4 mb-4 flex-row">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              value={value}
              onChange={(e) => handleChange(e, index)}
              maxLength="1"
              ref={inputRefs[index]} // Assign ref to input field
              className="w-12 h-12 mb-5 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-300"
            />
          ))}
        </form>
        <button onClick={handleSubmit} className="bg-indigo-900 text-white font-semibold px-8 py-2 rounded-md hover:bg-indigo-800 transition duration-300 h-30 w-60">
          Continue
        </button>
        <p className="mt-4 text-gray-600">If you haven't received a code, <span className="text-blue-500 cursor-pointer hover:underline">Resend</span></p>
        <p className="mt-2"><a href="/signup" className="text-blue-500 cursor-pointer hover:underline">Sign-up now</a></p>
      </div>
    </div>
  );
};
 
export default OtpInput;
 