const { Builder, By } = require('selenium-webdriver');
const { waitForElementVisible } = require('./waits');

(async function addToCartTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://bookbox.ch/');

    // Search for a specific book
    const searchInput = By.name('s');
    await waitForElementVisible(driver, searchInput);
    await driver.findElement(searchInput).sendKeys('Harry Potter\n');

    // Wait for result and click "Add to Cart"
    const firstBookAddBtn = By.css('.add_to_cart_button');
    await waitForElementVisible(driver, firstBookAddBtn);
    await driver.findElement(firstBookAddBtn).click();

    // Wait for cart count to update
    const cartCount = By.css('.cart-count'); // adjust if needed
    await waitForElementVisible(driver, cartCount);

    // Go to cart
    const cartLink = By.css('.cart-icon a'); // adjust selector
    await waitForElementVisible(driver, cartLink);
    await driver.findElement(cartLink).click();

    // Verify book is present in cart
    const cartItem = By.css('.cart_item');
    await waitForElementVisible(driver, cartItem);

  } finally {
    await driver.quit();
  }
})();

addToCartTest();
