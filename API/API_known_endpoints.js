// apiConfig.js

// Base API URL (change according to your environment)
export const API_BASE_URL = 'http://localhost:3000/api';

// Endpoint definitions based on Network tab observations
export const endpoints = {
  getBooks: '/books',
  getBookById: (id) => `/books/${id}`,
  createBook: '/books',
  updateBook: (id) => `/books/${id}`,
  deleteBook: (id) => `/books/${id}`,
  // Add other endpoints as needed
};
