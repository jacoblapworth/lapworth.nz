import { expect, test } from '@playwright/test'

test.describe('Accessibility', () => {
  test('should skip to main content', async ({ page }) => {
    await page.goto('/')
    await page.keyboard.press('Tab')
    await page.getByText('Skip to main content').focus()
    await page.keyboard.press('Enter')
    await expect(page.getByRole('main')).toBeVisible()
    await expect(page.getByRole('main')).toBeFocused()
  })
})
