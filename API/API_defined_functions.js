// exampleUsage.js
import api from './apiMethods';
import { endpoints } from './apiConfig';

async function testApiCalls() {
  try {
    // Get all books
    const books = await api.get(endpoints.getBooks);
    console.log('All books:', books);

    // Get book by ID
    const book = await api.get(endpoints.getBookById(123));
    console.log('Book with ID 123:', book);

    // Create a new book
    const newBook = await api.post(endpoints.createBook, { title: 'New Book' });
    console.log('Created book:', newBook);

    // Update a book
    const updatedBook = await api.put(endpoints.updateBook(123), { title: 'Updated Title' });
    console.log('Updated book:', updatedBook);

    // Delete a book
    await api.delete(endpoints.deleteBook(123));
    console.log('Book deleted');
  } catch (error) {
    console.error('API call error:', error);
  }
}

testApiCalls();
