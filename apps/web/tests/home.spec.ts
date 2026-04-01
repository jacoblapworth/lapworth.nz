import { expect, test } from '@playwright/test'

test.describe('Home', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should contain introduction', async ({ page }) => {
    await expect(page.getByText('Jacob tōku ingoa')).toBeVisible()
    await expect(page.getByText('-36.862600º, 174.741270º')).toBeVisible()
  })
})

test.describe('Darkmode', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should toggle dark mode', async ({ page }) => {
    await expect(page.locator('html')).toHaveClass(/light/)
    await expect(page.locator('body')).toHaveCSS(
      'background-color',
      'rgb(246, 246, 247)',
    )
    await page.getByTestId('theme-toggle').click()
    await expect(page.locator('html')).toHaveClass(/dark/)
    await expect(page.locator('body')).toHaveCSS(
      'background-color',
      'rgb(11, 12, 13)',
    )
  })
})
