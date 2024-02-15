import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3333/');

  // Expect a title "to contain" a substring.
  await page.getByRole('button', {name:'Sort & Filter'}).click();
  await expect(page.getByTitle('Expand the Cost Range (auto) facet')).toHaveCount(2);
});