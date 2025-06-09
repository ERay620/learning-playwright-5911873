import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dabohttps%253A%252F%252Fplaywright.dev%252Ft%253Ablank%26oq%3Dabohttps%253A%252F%252Fplaywright.dev%252Ft%253Ablank%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOTIGCAEQRRg60gEIMTY5MWowajKoAgCwAgE%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3DTh5DaLflE4e1i-gP48fc8AY&q=EgRV-349GM68jMIGIjAEUjBDxpCy5fZNiepqXjBckY_Uy-582tjHKatsMZWs5TzcTGOPzBu901vDwcT30ewyAVJaAUM');
  await page.locator('iframe[name="a-cuw796xt9fsa"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="c-cuw796xt9fsa"]').contentFrame().locator('td:nth-child(3)').first().click();
  await page.locator('iframe[name="c-cuw796xt9fsa"]').contentFrame().locator('tr:nth-child(2) > td:nth-child(4)').click();
  await page.locator('iframe[name="c-cuw796xt9fsa"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(4)').click();
  await page.locator('iframe[name="c-cuw796xt9fsa"]').contentFrame().getByRole('button', { name: 'Next' }).click();
  await page.locator('iframe[name="c-cuw796xt9fsa"]').contentFrame().locator('tr:nth-child(4) > td:nth-child(2)').click();
  await page.locator('iframe[name="c-cuw796xt9fsa"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(2)').click();
  await page.locator('iframe[name="c-cuw796xt9fsa"]').contentFrame().locator('tr:nth-child(2) > td:nth-child(2)').click();
  await page.locator('iframe[name="c-cuw796xt9fsa"]').contentFrame().locator('td:nth-child(2)').first().click();
  await page.locator('iframe[name="c-cuw796xt9fsa"]').contentFrame().locator('td:nth-child(3)').first().click();
  await page.locator('iframe[name="c-cuw796xt9fsa"]').contentFrame().locator('td:nth-child(4)').first().click();
  await page.locator('iframe[name="c-cuw796xt9fsa"]').contentFrame().locator('tr:nth-child(2) > td:nth-child(4)').click();
  await page.locator('iframe[name="c-cuw796xt9fsa"]').contentFrame().locator('tr:nth-child(2) > td:nth-child(3)').click();
  await page.locator('iframe[name="c-cuw796xt9fsa"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(3)').click();
  await page.locator('iframe[name="c-cuw796xt9fsa"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(4)').click();
  await page.locator('iframe[name="c-cuw796xt9fsa"]').contentFrame().locator('tr:nth-child(4) > td:nth-child(3)').click();
  await page.locator('iframe[name="c-cuw796xt9fsa"]').contentFrame().locator('tr:nth-child(3) > td').first().click();
  await page.locator('iframe[name="c-cuw796xt9fsa"]').contentFrame().locator('tr:nth-child(2) > td').first().click();
  await page.locator('iframe[name="c-cuw796xt9fsa"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.getByRole('button', { name: 'Rechazar todo' }).click();
  await page.getByRole('link', { name: 'Page Playwright https://' }).click();
  await page.getByRole('link', { name: 'Page Playwright https://' }).click();
});