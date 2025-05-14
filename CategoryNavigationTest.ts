const { Builder, By } = require('selenium-webdriver');
const { waitForElementVisible } = require('./waits');

(async function cartOperationsTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://bookbox.ch/');

    // Add first book
    await waitForElementVisible(driver, By.css('.add_to_cart_button'));
    let buttons = await driver.findElements(By.css('.add_to_cart_button'));
    await buttons[0].click();
    await buttons[1].click();

    // Go to cart
    await waitForElementVisible(driver, By.css('.cart-icon a'));
    await driver.findElement(By.css('.cart-icon a')).click();

    // Remove one book
    const removeBtn = By.css('.remove');
    await waitForElementVisible(driver, removeBtn);
    await driver.findElement(removeBtn).click();

    // Wait for update and verify count
    const cartItems = await driver.findElemeimport { test, expect } from '@playwright/test';
    import {
      goToHomepage,
      hoverBooksMenu,
      clickBelletristik
    } from './helpers';
    
    test('Category navigation and book count verification', async ({ page }) => {
      // Step 1: Go to the homepage
      await goToHomepage(page);
    
      // Step 2: Hover over "Bücher" menu
      await hoverBooksMenu(page);
    
      // Step 3: Click on "Belletristik" in left sidebar
      await clickBelletristik(page);
    
      // Step 4: Verify books are displayed
      const books = page.locator('.product-list .product');
      await expect(books).toHaveCountGreaterThan(0);
    
      // Step 5: Get number from category filter (on the left)
      const filterCountText = await page.locator('a:has-text("Belletristik") span').first().innerText();
      const expectedCount = parseInt(filterCountText.trim().replace(/[()]/g, ''), 10);
    
      // Step 6: Get actual number of book items displayed
      const actualCount = await books.count();
    
      // Step 7: Compare expected count from filter and actual visible count
      expect(actualCount).toBe(expectedCount);
    });
    nts(By.css('.cart_item'));
    console.log(`Remaining items in cart: ${cartItems.length}`);

  } finally {
    await driver.quit();
  }
})();

cartOperationsTest();
