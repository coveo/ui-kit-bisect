import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3333/');

  await page.getByRole('button', {name:'Sort & Filter'}).click();
  // Expect a given facet to be present only twice on the page when we open the filter modal.
  await expect(page.getByTitle('Expand the Cost Range (auto) facet')).toHaveCount(2);
});