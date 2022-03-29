import axios from "axios";
import react from "react";

const BASE_URL = "http://16.170.35.60:8080";

export default axios.create({
  baseURL: BASE_URL,
});
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});
