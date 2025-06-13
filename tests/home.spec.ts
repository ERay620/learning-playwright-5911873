import { test, expect } from "@playwright/test";

test.describe("Home page with no auth", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/", {
      waitUntil: "load",
    });
  });

  test("Visual check of the home page", async ({ page }) => {
    // Inject a visual change to fail the screenshot test. This is just for demonstration purposes; in a real test, you would not modify the page like this.
    // await page.evaluate(() => {
    //   document.body.style.backgroundColor = "red";
    // });

    await page.waitForLoadState("networkidle"); // Ensure the page is fully loaded before taking the screenshot 

    await expect(page).toHaveScreenshot(
      "home-page-no-auth.png", // This will compare the screenshot with the baseline image
      { mask: [page.getByTitle("Practice Software Testing - Toolshop")] }
    ); 
  });
  test("check sign in", async ({ page }) => {
    await expect(page.getByTestId("nav-sign-in")).toHaveText("Sign in");
  });

  test("validate page title", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Practice Software Testing - Toolshop - v5.0"
    );
  });

  test("grid loads with 9 items", async ({ page }) => {
    const productGrid = page.locator(".col-md-9");
    await expect(productGrid.getByRole("link")).toHaveCount(9);
    expect(await productGrid.getByRole("link").count()).toBe(9);
  });

  test("search for Thor Hammer", async ({ page }) => {
    const productGrid = page.locator(".col-md-9");
    await page.getByTestId("search-query").fill("Thor Hammer");
    await page.getByTestId("search-submit").click();
    await expect(productGrid.getByRole("link")).toHaveCount(1);
    await expect(page.getByAltText("Thor Hammer")).toBeVisible();
  });
});

test.describe("Home page customer 01 auth", () => {
  test.use({ storageState: ".auth/customer01.json" });
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/", {
      waitUntil: "load",
    });
  });

  test("Visual check of the home page", async ({ page }) => {
    await page.waitForLoadState("networkidle");
    await expect(page).toHaveScreenshot("home-page-customer-01.png", { // This will compare the screenshot with the baseline image
      mask: [page.getByTitle("Practice Software Testing - Toolshop")], // Mask the header to avoid changes in the header affecting the screenshot
    }); 
  });

  test("check customer 01 is signed in", async ({ page }) => {
    await expect(page.getByTestId("nav-sign-in")).not.toBeVisible();
    await expect(page.getByTestId("nav-menu")).toContainText("Jane Doe");
  });
});
