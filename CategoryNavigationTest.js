const { Builder, By } = require('selenium-webdriver');
const { waitForElementVisible } = require('./waits');

(async function categoryNavigationTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://bookbox.ch/');

    // Click on 'Fiction' category
    const fictionLink = By.linkText('Fiction');
    await waitForElementVisible(driver, fictionLink);
    await driver.findElement(fictionLink).click();

    // Wait for books to load
    const productGrid = By.css('.product-grid'); // adjust selector
    await waitForElementVisible(driver, productGrid);

    // Get all displayed books
    const books = await driver.findElements(By.css('.product-grid .product-card'));
    console.log(`Found ${books.length} books in Fiction category`);

    // Optionally assert that book count > 0
    if (books.length === 0) {
      throw new Error('No books found for Fiction category');
    }

  } finally {
    await driver.quit();
  }
})();

categoryNavigationTest();
  