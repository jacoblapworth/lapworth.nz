import { expect, test } from '@playwright/test'

test.describe('CV', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should request cv', async ({ page }) => {
    await page.locator('nav').getByText('CV').click()
    await page.getByLabel('Email').click()
    await page.getByLabel('Email').fill('delivered@resend.dev') // Resend test email address
    await page.keyboard.press('Enter')
    await expect(
      page.locator('main').getByText(/Please check your email./),
    ).toBeVisible()
  })
})
