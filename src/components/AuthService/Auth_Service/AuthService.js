
const API_URL = 'http://192.168.0.108:8082/api';


export const AuthService = {
  login: async (userName, password) => {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userName, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    return data;
  },

  register: async (username, email, password, confirmPassword) => {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password, confirmPassword }),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    const data = await response.json();
    return data;
  },

  setToken: (token) => {
    localStorage.setItem('token', token);
  },

  getToken: () => {
    return localStorage.getItem('token');
  },

  clearToken: () => {
    localStorage.removeItem('token');
  },
};



// Import the axios instance
// import {finappaxios} from "../../../../../axios"  

// export const AuthService = {
//   login: async (userName, password) => {
//     try {
//       const response = await finappaxios.post('/api/login', { userName, password });
//       return response.data;
//     } catch (error) {
//       throw new Error('Login failed');
//     }
//   },

//   register: async (username, password, confirmPassword) => {
//     try {
//       const response = await finappaxios.post('/app/register', { username, password, confirmPassword });
//       return response.data;
//     } catch (error) {
//       throw new Error('Registration failed');
//     }
//   },

//   setToken: (token) => {
//     localStorage.setItem('token', token);
//   },

//   getToken: () => {
//     return localStorage.getItem('token');
//   },

//   clearToken: () => {
//     localStorage.removeItem('token');
//   },
// };


