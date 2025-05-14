import { test, expect } from '@playwright/test';
import {
  goToHomepage,
  hoverBooksMenu,
  clickBelletristik,
  clickBook,
  addToCart,
  openCart,
  expectBookInCart,
  removeBookFromCart,
  expectBookNotInCart,
  getCartItemCount
} from './helpers';

test('Add two books to cart, remove one, and verify updates', async ({ page }) => {
  // Step 1: Go to homepage and add "Nights in Capernaum"
  await goToHomepage(page);
  await hoverBooksMenu(page);
  await clickBelletristik(page);
  await clickBook(page, 'Nights in Capernaum');
  await addToCart(page);

  // Step 2: Navigate again and add "A Capote Reader"
  await hoverBooksMenu(page);
  await clickBelletristik(page);
  await clickBook(page, 'A Capote Reader');
  await addToCart(page);

  // Step 3: Open the cart
  await openCart(page);

  // Step 4: Verify both books are present
  await expectBookInCart(page, 'Nights in Capernaum');
  await expectBookInCart(page, 'A Capote Reader');

  // Step 5: Get cart count before removing
  const countBefore = await getCartItemCount(page);

  // Step 6: Remove "A Capote Reader" from cart
  await removeBookFromCart(page, 'A Capote Reader');

  // Step 7: Verify it's removed
  await expectBookNotInCart(page, 'A Capote Reader');

  // Step 8: Verify cart count decreased
  const countAfter = await getCartItemCount(page);
  expect(countAfter).toBe(countBefore - 1);
});
