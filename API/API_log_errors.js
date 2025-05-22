// axiosInstance.js
import axios from 'axios';
import { API_BASE_URL } from './apiConfig';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10 seconds timeout
});

// Response interceptor for error logging
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.error('API error:', error.response?.status, error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
