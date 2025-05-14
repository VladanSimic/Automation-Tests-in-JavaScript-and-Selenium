import { test, expect } from '@playwright/test';
import {
  goToHomepage,
  hoverBooksMenu,
  clickBelletristik,
  clickBook,
  addToCart,
  openCart,
  expectBookInCart,
  expectBookNotInCart,
  removeBookFromCart,
  getCartItemCount
} from './helpers';

test('Cart operations: add two books, remove one, and verify cart state', async ({ page }) => {
  // Step 1: Go to homepage and add first book
  await goToHomepage(page);
  await hoverBooksMenu(page);
  await clickBelletristik(page);
  await clickBook(page, 'Nights in Capernaum');
  await addToCart(page);

  // Step 2: Go back and add second book
  await hoverBooksMenu(page);
  await clickBelletristik(page);
  await clickBook(page, 'A Capote Reader');
  await addToCart(page);

  // Step 3: Open cart and verify both books are present
  await openCart(page);
  await expectBookInCart(page, 'Nights in Capernaum');
  await expectBookInCart(page, 'A Capote Reader');

  // Step 4: Check cart count before removal
  const countBefore = await getCartItemCount(page);

  // Step 5: Remove "A Capote Reader" from cart
  await removeBookFromCart(page, 'A Capote Reader');

  // Step 6: Verify removal and remaining items
  await expectBookNotInCart(page, 'A Capote Reader');
  await expectBookInCart(page, 'Nights in Capernaum');

  // Step 7: Verify the cart count has decreased
  const countAfter = await getCartItemCount(page);
  expect(countAfter).toBe(countBefore - 1);
});
