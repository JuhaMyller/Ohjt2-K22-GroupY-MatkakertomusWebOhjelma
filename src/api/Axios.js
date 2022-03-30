import axios from 'axios';
import react from 'react';

const BASE_URL = process.env.REACT_APP_SERVER_URL;
console.log(process.env.REACT_APP_SERVER_URL);

export default axios.create({
  baseURL: BASE_URL,
});
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});
