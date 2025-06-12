import { test, expect } from "@playwright/test";
test.describe("Home Page Tests", () => {
  // Grouping tests related to the home page

  test.beforeEach(async ({ page }) => {
    // Navigate to the home page before each test
    await page.goto("https://practicesoftwaretesting.com/");
  });

  test("Sign in", async ({ page }) => {
    // Ensure the sign-in link is present
    await expect(page.getByTestId("nav-sign-in")).toHaveText("Sign in");
  });

  test("Validate Page Title", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Practice Software Testing - Toolshop - v5.0"
    );
  });

  test("ProductGrid has 9 items", async ({ page }) => {
    // Check if the product grid is displayed correctly
    const productGrid = page.locator(".col-md-9");
    await expect(productGrid.getByRole("link")).toHaveCount(9);
    expect(await productGrid.getByRole("link").count()).toBe(9);
  });

  test("Search for Thor Hammer", async ({ page }) => {
    // Search for a specific product
    const productGrid = page.locator(".col-md-9");
    await page.getByTestId("search-query").fill("Thor Hammer");
    await page.getByTestId("search-submit").click();
    await expect(productGrid.getByRole("link")).toHaveCount(1);
    await expect(page.getByAltText("Thor Hammer")).toBeVisible();
  });
});
