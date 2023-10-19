const { test, expect } = require('@playwright/test');
const path = require('path');

const pathToPosix = __dirname.split(path.sep).join(path.posix.sep);

test('has title', async ({ page }) => {
  await page.goto('file://' + pathToPosix + '/index.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Test/);
  await expect(page.locator('#test')).toContainText('TEST');

  
  await page.keyboard.press('A');
  await expect(page.locator('#test')).toContainText('keyup');

  await page.keyboard.press('Escape');
  await expect(page.locator('#test')).toContainText('keyup');

});

