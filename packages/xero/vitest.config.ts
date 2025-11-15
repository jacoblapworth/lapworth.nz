import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import { playwright } from '@vitest/browser-playwright'
import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

const dirname = path.dirname(fileURLToPath(import.meta.url))

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      // Use `workspace` field in Vitest < 3.2
      projects: [
        {
          extends: true,
          plugins: [
            storybookTest({
              // The location of your Storybook config, main.js|ts
              configDir: path.join(dirname, '.storybook'),
              // This should match your package.json script to run Storybook
              // The --no-open flag will skip the automatic opening of a browser
              storybookScript: 'yarn storybook --no-open',
            }),
          ],
          test: {
            // Enable browser mode
            browser: {
              enabled: true,
              headless: true,
              instances: [{ browser: 'chromium' }],
              // Make sure to install Playwright
              provider: playwright({}),
            },
            name: 'storybook',
          },
        },
      ],
    },
  }),
)
