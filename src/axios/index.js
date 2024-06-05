import axios from "axios";

// Retrieve the token from localStorage
var storageToken = localStorage.getItem("token");

// Initialize tokenAccess
let tokenAccess = '';

if (storageToken) {
  try {
    // If the token is stored as a JSON string, parse it
    const token = JSON.parse(storageToken);
    tokenAccess = token && token.access;
  } catch (e) {
    // If parsing fails, assume token is a plain string
    tokenAccess = storageToken;
  }
}

// Create an axios instance with the authorization header
export const finappaxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL_FINAPP,  
  headers: {"Authorization" : `Bearer ${tokenAccess}`}
});
