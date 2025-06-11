import { test, expect } from "@playwright/test"; // Import Playwright test module

test.describe("Home Page Tests", () => {
  // Group tests related to the home page
  test.beforeEach(async ({ page }) => {
    // Run before each test
    await page.goto("https://practicesoftwaretesting.com/"); // Navigate to the home page
  });

  test("should display the correct title and the sign-in button", async ({
    page,
  }) => {
    // Test for the page title and header text
    await expect(page.getByTestId("nav-sign-in")).toHaveText("Sign in"); // Check if the sign-in button has the correct text
    await expect(page).toHaveTitle(
      "Practice Software Testing - Toolshop - v5.0",
      { timeout: 10000 }
    ); // Check if the title is as expected
  });

  test("check the count of the items in the page", async ({ page }) => {
    // Test for the count of items on the page
    const productItems = page.locator(".col-md-9"); // Locate all items on the page
    await expect(productItems.getByRole("link")).toHaveCount(9); // Check if the count is exactly 6
    expect(await productItems.getByRole("link").count()).toBe(9); // Assert that the count is 6
  });

  test("Check if the header image is visible", async ({ page }) => {
    const productItems = page.locator(".col-md-9"); // Locate all items on the page
    // Check if the header image is visible
    await page.getByTestId("search-query").fill("Thor Hammer"); // Fill the search input with "Thor Hammer"
    await page.getByTestId("search-submit").click(); // Click the search button
    // Wait for the search results to load
    await expect(productItems.getByRole("link")).toHaveCount(1); // Check if the count of search results is 1
    await expect(page.getByAltText("Thor Hammer")).toBeVisible(); // Check if the image is visible
  });

  test.afterEach(async ({ page }) => {
    // Run after each test
    await page.reload(); // Reload the page to reset state
  });

  test.afterAll(async ({ page }) => {
    // Run after all tests
    await page.close(); // Close the page after tests are done
  });
});
