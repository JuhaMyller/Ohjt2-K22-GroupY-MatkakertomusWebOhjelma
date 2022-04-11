import axios from "axios";
import react from "react";
import serverUrl from "../utils/serverUrl";

const BASE_URL = serverUrl;
// 'http://localhost:4000' || 'https://ohjelmistotuotanto2.herokuapp.com';

export default axios.create({
  baseURL: BASE_URL,
});
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});
