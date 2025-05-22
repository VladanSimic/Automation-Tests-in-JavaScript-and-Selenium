// apiMethods.js
import axiosInstance from './axiosInstance';

const api = {
  get: async (endpoint) => {
    const url = typeof endpoint === 'function' ? endpoint() : endpoint;
    try {
      const response = await axiosInstance.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  post: async (endpoint, data) => {
    const url = typeof endpoint === 'function' ? endpoint() : endpoint;
    try {
      const response = await axiosInstance.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  put: async (endpoint, data) => {
    const url = typeof endpoint === 'function' ? endpoint() : endpoint;
    try {
      const response = await axiosInstance.put(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  delete: async (endpoint) => {
    const url = typeof endpoint === 'function' ? endpoint() : endpoint;
    try {
      const response = await axiosInstance.delete(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default api;
