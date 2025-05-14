import { Page, expect } from '@playwright/test';

// Go to BookBox homepage
export async function goToHomepage(page: Page) {
  await page.goto('https://bookbox.ch/');
}

// Hover over "Bücher" in the main menu
export async function hoverBooksMenu(page: Page) {
  await page.hover('nav >> text=Bücher');
}

// Click "Belletristik" from left sidebar
export async function clickBelletristik(page: Page) {
  await page.click('text=Belletristik');
  await page.waitForSelector('.product-list');
}

// Click a book by its title
export async function clickBook(page: Page, title: string) {
  await page.click(`text=${title}`);
}

// Click the "Add to cart" button
export async function addToCart(page: Page) {
  await page.waitForSelector('button:has-text("Zum Warenkorb hinzufügen")');
  await page.click('button:has-text("Zum Warenkorb hinzufügen")');
}

// Open the cart from top right
export async function openCart(page: Page) {
  await page.click('a[href="/cart"]');
  await page.waitForSelector('.cart-item');
}

// Expect a book to be present in the cart
export async function expectBookInCart(page: Page, title: string) {
  const item = page.locator(`.cart-item-title:has-text("${title}")`);
  await expect(item).toBeVisible();
}

// Remove a book from the cart by its title
export async function removeBookFromCart(page: Page, title: string) {
  const removeBtn = page.locator('.cart-item', { hasText: title }).locator('button:has-text("×")');
  await removeBtn.click();
}

// Expect a book to not be in the cart
export async function expectBookNotInCart(page: Page, title: string) {
  const item = page.locator(`.cart-item-title:has-text("${title}")`);
  await expect(item).toHaveCount(0);
}

// Get current number of items in the cart
export async function getCartItemCount(page: Page) {
  return await page.locator('.cart-item').count();
}
