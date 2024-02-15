import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3333/');
  /**
   * Write your test here
   */
  expect(true).toBeTruthy();
});