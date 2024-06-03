// import axios from 'axios';
//  const API_URL = 'http://yourapi.com/api/auth/';
 
// const register = (username, email, password) => {
//   return axios.post(API_URL + 'signup', {
//     username,
//     email,
//     password,
//   });

// };
//  const login = (username, password) => {
//   return axios
//     .post(API_URL + 'signin', {
//       username,
//       password,
//     })

//     .then((response) => {
//       if (response.data.accessToken) {
//         localStorage.setItem('user', JSON.stringify(response.data));
//       }
//       return response.data;
//     });

// };
 
// const logout = () => {
//   localStorage.removeItem('user');

// };
 
// export default {
//   register,
//   login,
//   logout,
// };

import axios from 'axios';

const API_URL = 'http://192.168.0.127:8082/api/login';

const login = async (userName, password) => {
  const response = await axios.post(API_URL, {
    userName,
    password,
  });
  return response.data;
};

const setToken = (token) => {
  localStorage.setItem('token', token);
};


const getToken = () => {
  return localStorage.getItem('token');
};

const removeToken = () => {
  localStorage.removeItem('token');
};

export const authService = {
  login,
  setToken,
  getToken,
  removeToken,
};

