const axios = require('axios');

const BASE_URL = 'https://bookbox.ch/wp-json/wc/store';

(async function apiTests() {
  try {
    // 1. Fetch all categories
    const categoriesResponse = await axios.get(`${BASE_URL}/products/categories`);
    console.log('Available Categories:', categoriesResponse.data.map(c => c.name));

    // 2. Search of a book (if exists endpoint for search)
    const searchTerm = 'Harry Potter';
    const productsResponse = await axios.get(`${BASE_URL}/products`, {
      params: { search: searchTerm }
    });

    if (productsResponse.data.length > 0) {
      console.log(`Found ${productsResponse.data.length} results for "${searchTerm}"`);
      console.log('First product:', productsResponse.data[0].name);
    } else {
      console.log(`No results found for "${searchTerm}"`);
    }

    // 3. Details about product (the first item from the list)
    const productId = productsResponse.data[0]?.id;
    if (productId) {
      const productDetail = await axios.get(`${BASE_URL}/products/${productId}`);
      console.log('Product Detail:', productDetail.data.name);
    }

  } catch (err) {
    console.error('API test failed:', err.response?.data || err.message);
  }
})();

apiTests();
