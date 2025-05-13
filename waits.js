// waits.js
const { By, until } = require('selenium-webdriver');

/**
 * Waits until the element is located in the DOM
 */
async function waitForElement(driver, locator, timeout = 10000) {
    await driver.wait(until.elementLocated(locator), timeout);
    return await driver.findElement(locator);
}

/**
 * Waits until the element is visible to the user
 */
async function waitForElementVisible(driver, locator, timeout = 10000) {
    const element = await waitForElement(driver, locator, timeout);
    await driver.wait(until.elementIsVisible(element), timeout);
    return element;
}

module.exports = {
    waitForElement,
    waitForElementVisible
};
