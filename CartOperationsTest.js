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
    const cartItems = await driver.findElements(By.css('.cart_item'));
    console.log(`Remaining items in cart: ${cartItems.length}`);

  } finally {
    await driver.quit();
  }
})();

cartOperationsTest();
