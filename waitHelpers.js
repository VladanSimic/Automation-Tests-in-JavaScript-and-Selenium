const { until } = require('selenium-webdriver');

const waitForElementLocated = async (driver, locator, timeout = 10000) => {
  return driver.wait(until.elementLocated(locator), timeout);
};

const waitForElementVisible = async (driver, locator, timeout = 10000) => {
  const element = await waitForElementLocated(driver, locator, timeout);
  return driver.wait(until.elementIsVisible(element), timeout);
};

module.exports = {
  waitForElementLocated,
  waitForElementVisible,
};
