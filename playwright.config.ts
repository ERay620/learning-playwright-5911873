import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  timeout:30_000, // 30 seconds : it means that if a test takes more than 30 seconds, it will fail. This setting is useful to prevent tests from hanging indefinitely.
  globalTimeout: 120_000, // 2 minutes : it means that the entire test suite should not take more than 2 minutes to run. If it does, the test suite will fail. This is useful for CI environments where you want to ensure that tests complete in a reasonable time frame.
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://practicesoftwaretesting.com/', // Base URL for the tests : it means that all relative URLs in the tests will be resolved against this base URL. For example, if a test navigates to `/login`, it will actually navigate to `https://practicesoftwaretesting.com/login`.

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on', // 'on' : it means that Playwright will collect a trace of the test execution, which can be useful for debugging. The trace will include information about the actions performed, network requests, and screenshots.
    actionTimeout: 10_000, // 10 seconds : it means that each action (like clicking a button or typing in an input field) should not take more than 10 seconds to complete. If it does, the action will fail.
    ignoreHTTPSErrors: true, // Ignore HTTPS errors : it means that if the application under test has an invalid SSL certificate, Playwright will not throw an error. 
    video:'retain-on-failure', // 'retain-on-failure' : it means that Playwright will record a video of the test execution, but only if the test fails. This is useful for debugging failed tests without cluttering the output with videos of successful tests
    screenshot: 'only-on-failure', // 'only-on-failure' : it means that Playwright will take a screenshot of the page only if the test fails. This is useful for debugging failed tests without cluttering the output with screenshots of successful tests.
    headless: true, // Run tests in headless mode : it means that the browser will run without a graphical user interface (GUI). This is useful for running tests in CI environments or on servers where a GUI is not available. 
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
