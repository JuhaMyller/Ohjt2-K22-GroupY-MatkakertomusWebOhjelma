import axios from 'axios';
import react from 'react';

const BASE_URL = 'https://ohjelmistotuotanto2.herokuapp.com';

console.log(BASE_URL);

export default axios.create({
  baseURL: BASE_URL,
});
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});
