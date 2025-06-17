import { test, expect } from "@playwright/test";

test.describe("Checkout challenge", async () => {
  test.use({ storageState: ".auth/customer01.json" });

  test.beforeEach(async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com");
  });

  test("buy now pay later", async ({ page, headless }) => {
    await page.getByText("Claw Hammer with Shock Reduction Grip").click();
    await page.getByTestId("add-to-cart").click();
    await expect(page.getByTestId("cart-quantity")).toHaveText("1");
    await page.getByTestId("nav-cart").click();
    await page.getByTestId("proceed-1").click();
    await page.getByTestId("proceed-2").click();
    await expect(
      page.locator(".step-indicator").filter({ hasText: "2" })
    ).toHaveCSS("background-color", "rgb(51, 153, 51)");
    await page.getByTestId("street").fill("123 Testing Way");
    await page.getByTestId("city").fill("Sacramento");
    await page.getByTestId("state").fill("California");
    await page.getByTestId("country").fill("USA");
    await page.getByTestId("postal_code").fill("98765");
    await page.getByTestId("proceed-3").click();
    await expect(page.getByTestId("finish")).toBeDisabled();
    await page.getByTestId("payment-method").selectOption("Buy Now Pay Later");
    await page
      .getByTestId("monthly_installments")
      .selectOption("6 Monthly Installments");
    await page.getByTestId("finish").click();
    await expect(page.locator(".help-block")).toHaveText(
      "Payment was successful"
    );
    headless // Running in headless mode, so we can take a screenshot
      ? await test.step("visual test", async () => { // Take a screenshot of the checkout page 
          await expect(page).toHaveScreenshot("checkout.png", {
            mask: [page.getByTitle("Practice Software Testing - Toolshop")],
          });
        })
      : console.log("Running in Headed mode, no screenshot comparison");
  });
});

test.describe("Api challenge", () => {
  test("GET /products/{id}", async ({ request }) => {
    const apiUrl = "https://api.practicesoftwaretesting.com";
    const getProductResponse = await request.get(
      apiUrl + "/products/search?q=thor%20hammer"
    );
    expect(getProductResponse.status()).toBe(200);
    const productBody = await getProductResponse.json();
    const productId = productBody.data[0].id;

    const response = await request.get(apiUrl + "/products/" + productId);

    expect(response.status()).toBe(200);
    const body = await response.json();

    expect(body.in_stock).toBe(true);
    expect(body.is_location_offer).toBe(false);
    expect(body.is_rental).toBe(false);
    expect(body.name).toBe("Thor Hammer");
    expect(body.price).toBe(11.14);
  });
});

/*  
for line number 35:
this is not going to run when headless is false, but when it is running headless, it will capture the screenshot and do a comparison. The reason I have it like this is you might have recognized the screenshot comparison is different if you're running in headless versus running in a browser. Specifically, if you're using the VS code extension to run your test, opening the browser, your visual comparisons are going to be pixels off and it's going to be frustrating. So this is the approach I took in just making my test less flaky

Your explanation is correct and follows Playwright best practices:

Why:
Visual (screenshot) comparisons can be unreliable ("flaky") when running in headed (browser window) mode, 
because UI rendering can differ slightly from headless mode 
(e.g., due to OS window decorations, focus, or hardware acceleration). 
This can cause pixel differences and false test failures.

What your code does:

If headless is true (the test runs in headless mode), it takes a screenshot and compares it to a baseline.
If headless is false (the test runs in a visible browser), it skips the screenshot comparison 
and logs a message instead.
Benefit:
This approach avoids flaky visual tests and ensures screenshot comparisons are only done in a consistent, 
controlled environment (headless mode).


if (headless) {
  await test.step("visual test", async () => {
    await expect(page).toHaveScreenshot("checkout.png", {
      mask: [page.getByTitle("Practice Software Testing - Toolshop")],
    });
  });
} else {
  console.log("Running in Headed mode, no screenshot comparison");
}

Summary:
You’re making your visual tests more reliable by only running screenshot comparisons in headless mode, 
where rendering is consistent. 
This reduces false positives and test flakiness.

*/