// api.js
import axios from 'axios';

// Base URL for the API - this should be the URL of your backend server
// if my backend is running on localhost:3000, use 'http://localhost:3000/api' ==> needs to be set
const API_BASE_URL = 'http://localhost:3000/api'; 

const api = {
  // Sends a GET request to the specified endpoint
  get: async (endpoint) => {
    try {
      const response = await axios.get(`${API_BASE_URL}${endpoint}`);
      return response.data;
    } catch (error) {
      console.error(`GET request failed: ${error}`);
      throw error;
    }
  },

  // Sends a POST request with data to the specified endpoint
  post: async (endpoint, data) => {
    try {
      const response = await axios.post(`${API_BASE_URL}${endpoint}`, data);
      return response.data;
    } catch (error) {
      console.error(`POST request failed: ${error}`);
      throw error;
    }
  },

  // Sends a PUT request with data to update the specified endpoint
  put: async (endpoint, data) => {
    try {
      const response = await axios.put(`${API_BASE_URL}${endpoint}`, data);
      return response.data;
    } catch (error) {
      console.error(`PUT request failed: ${error}`);
      throw error;
    }
  },

  // Sends a DELETE request to the specified endpoint
  delete: async (endpoint) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}${endpoint}`);
      return response.data;
    } catch (error) {
      console.error(`DELETE request failed: ${error}`);
      throw error;
    }
  },
};

export default api;
