BookBox Test Automation Suite

This repository contains a set of automated tests for the e-commerce website bookbox.ch. The suite includes both UI (end-to-end) tests using Selenium WebDriver and API tests using Axios.

Test Coverage

UI Tests (Selenium)
All UI tests are implemented using JavaScript with the selenium-webdriver library and are executed on the Chrome browser.

1.	Category Navigation Test (categoryNavigationTest.js)

-	Navigate to homepage
-	Click on the "Fiction" category
-	Verify that books are displayed
-	Verify that the number of books matches the category filter

2.	Add to Cart Flow (addToCartTest.js)

-	Search for a specific book (e.g., "Harry Potter")
-	Add the book to the cart
-	Verify that the cart icon updates
-	Navigate to cart and verify the book is listed

3.	Cart Operations Test (cartOperationsTest.js)

-	Add multiple books to the cart
-	Remove one book from the cart
-	Verify cart count and total are updated accordingly

API Tests (Axios)

Implemented in apiTests.js, these scripts perform REST API validation using publicly available WooCommerce endpoints:

-	Fetch product categories (GET /products/categories)
-	Search for a product (GET /products?search=query)
-	Fetch product details (GET /products/:id)

Wait Helpers

All UI tests use centralized explicit wait functions defined in waits.js:

-	waitForElementLocated(driver, locator, timeout)
-	waitForElementVisible(driver, locator, timeout)

This promotes DRY code and avoids flaky tests due to premature element interaction.

Pros

-	JavaScript universality – frontend and QA teams can work in the same language
-	Cross-browser support via Selenium
-	Modular structure – helpers and tests are cleanly separated
-	Reusable waits reduce flaky test failures
-	No licensing cost – fully open source

Cons

-	Selenium tests can be slower than headless frameworks
-	Requires setup (browser drivers, wait logic, selectors)
-	Not as developer-friendly as Cypress or Playwright for debugging
-	No built-in API authentication (must handle manually if needed)
