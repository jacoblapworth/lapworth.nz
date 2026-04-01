import { expect, test } from '@playwright/test'

test.describe('Work', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should show work', async ({ page }) => {
    await page.locator('nav').getByText('Work').click()
    await expect(page).toHaveURL(/\/work/)
    await page.getByText('Advanced tables for Xero').click()
    await page.locator('#editing').click()
  })
})
