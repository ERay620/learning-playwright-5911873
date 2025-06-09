import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://playwright.dev/docs/api/class-page");
  await page.getByRole("link", { name: "APIRequest", exact: true }).click();
  await expect(page.locator("h1")).toContainText("APIRequest");
  await expect(page.locator("#methods")).toContainText("Methods");
});



test("Click each link under Docs and list all page links", async ({ page }) => {
  // Navigate to the Playwright documentation page
  await page.goto("https://playwright.dev");

  // Wait for the Docs component to be visible
  await page.waitForSelector("nav >> text=Docs");

  // Get all links under the Docs component
  const docLinks = await page.$$eval(
    'nav >> text=Docs >> a[href^="/docs/"]',
    (links) => links.map((link) => (link as HTMLAnchorElement).href)
  );

  // Click each link and log the URL
  for (const link of docLinks) {
    await page.goto(link);
    console.log(`Visited: ${link}`);
  }

  // List all the page links in the console
  console.log("All page links under Docs:");
  console.log(docLinks);
});

