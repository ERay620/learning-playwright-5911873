import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/intro');
  await page.getByRole('link', { name: 'Writing tests', exact: true }).click();
  await page.getByRole('link', { name: 'Generating tests', exact: true }).click();
  await page.getByRole('link', { name: 'Running and debugging tests', exact: true }).click();
  await page.getByRole('link', { name: 'Trace viewer' }).first().click();
  await page.getByRole('link', { name: 'Setting up CI', exact: true }).click();
  await page.getByRole('link', { name: 'Getting started - VS Code', exact: true }).click();
  await page.getByRole('link', { name: 'Release notes', exact: true }).click();
  await page.getByRole('link', { name: 'Canary releases', exact: true }).click();
  await page.getByRole('button', { name: 'Playwright Test' }).click();
  await page.getByRole('button', { name: 'Playwright Test' }).click();
  await page.getByRole('link', { name: 'Test configuration', exact: true }).click();
  await page.getByRole('link', { name: 'Test use options', exact: true }).click();
  await page.getByRole('link', { name: 'Annotations', exact: true }).click();
  await page.getByRole('link', { name: 'Command line', exact: true }).click();
  await page.getByRole('link', { name: 'Emulation', exact: true }).click();
  await page.getByRole('link', { name: 'Fixtures', exact: true }).click();
  await page.getByRole('link', { name: 'Global setup and teardown', exact: true }).click();
  await page.getByRole('link', { name: 'Parallelism', exact: true }).click();
  await page.getByRole('link', { name: 'Parameterize tests', exact: true }).click();
  await page.getByRole('link', { name: 'Projects', exact: true }).click();
  await page.getByRole('link', { name: 'Reporters', exact: true }).click();
  await page.getByRole('link', { name: 'Retries', exact: true }).click();
  await page.getByRole('link', { name: 'Sharding', exact: true }).click();
  await page.getByRole('link', { name: 'Timeouts', exact: true }).click();
  await page.getByRole('link', { name: 'TypeScript', exact: true }).click();
  await page.getByRole('link', { name: 'UI Mode', exact: true }).click();
  await page.getByRole('link', { name: 'Web server', exact: true }).click();
  await page.getByRole('link', { name: 'Library', exact: true }).click();
  await page.getByRole('link', { name: 'Accessibility testing', exact: true }).click();
  await page.getByRole('link', { name: 'Actions', exact: true }).click();
  await page.getByRole('link', { name: 'Assertions', exact: true }).click();
  await page.getByRole('link', { name: 'API testing', exact: true }).click();
  await page.getByRole('link', { name: 'Authentication', exact: true }).click();
  await page.getByRole('link', { name: 'Auto-waiting', exact: true }).click();
  await page.getByRole('link', { name: 'Best Practices', exact: true }).click();
  await page.getByRole('link', { name: 'Browsers', exact: true }).click();
  await page.getByRole('link', { name: 'Chrome extensions', exact: true }).click();
  await page.getByRole('link', { name: 'Clock', exact: true }).click();
  await page.getByRole('link', { name: 'Components (experimental)', exact: true }).click();
  await page.getByRole('link', { name: 'Debugging Tests', exact: true }).click();
  await page.getByRole('link', { name: 'Dialogs', exact: true }).click();
  await page.getByRole('link', { name: 'Downloads', exact: true }).click();
  await page.getByRole('link', { name: 'Evaluating JavaScript', exact: true }).click();
  await page.getByRole('link', { name: 'Events', exact: true }).click();
  await page.getByRole('link', { name: 'Extensibility', exact: true }).click();
  await page.getByRole('link', { name: 'Frames', exact: true }).click();
  await page.getByRole('link', { name: 'Handles', exact: true }).click();
  await page.getByRole('link', { name: 'Isolation', exact: true }).click();
  await page.getByRole('link', { name: 'Locators', exact: true }).click();
  await page.getByRole('link', { name: 'Mock APIs', exact: true }).click();
  await page.getByRole('link', { name: 'Mock browser APIs', exact: true }).click();
  await page.getByRole('link', { name: 'Navigations', exact: true }).click();
  await page.getByRole('link', { name: 'Network', exact: true }).click();
  await page.getByRole('link', { name: 'Other locators', exact: true }).click();
  await page.getByRole('link', { name: 'Pages', exact: true }).click();
  await page.getByRole('link', { name: 'Page object models', exact: true }).click();
  await page.getByRole('link', { name: 'Screenshots', exact: true }).click();
  await page.getByRole('link', { name: 'Snapshot testing', exact: true }).click();
  await page.getByRole('link', { name: 'Test generator', exact: true }).click();
  await page.getByRole('link', { name: 'Touch events (legacy)', exact: true }).click();
  await page.getByRole('link', { name: 'Trace viewer' }).nth(1).click();
  await page.getByRole('link', { name: 'Videos', exact: true }).click();
  await page.getByRole('link', { name: 'Visual comparisons', exact: true }).click();
  await page.getByRole('link', { name: 'WebView2', exact: true }).click();
  await page.getByRole('button', { name: 'Migration' }).click();
  await page.getByRole('button', { name: 'Integrations' }).click();
  await page.getByRole('link', { name: 'Docker' }).click();
  await page.getByRole('link', { name: 'Continuous Integration', exact: true }).click();
  await page.getByRole('link', { name: 'Selenium Grid (experimental)', exact: true }).click();
});



test("log all Playwright docs links", async ({ page }) => {
  await page.goto("https://playwright.dev/docs/intro");

  const baseUrl = "https://playwright.dev";

  // Grab all internal links starting with /docs/
  const links = await page.$$eval('a[href^="/docs/"]', (anchors) =>
    Array.from(new Set(anchors.map((a) => a.getAttribute("href"))))
  );

  // Log each full URL
  console.log("\n🔗 Found Playwright Docs Links:");
  links.forEach((href) => {
    if (href) console.log(baseUrl + href);
  });
});
