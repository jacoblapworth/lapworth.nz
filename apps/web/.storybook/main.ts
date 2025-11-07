import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import type { StorybookConfig } from '@storybook/nextjs-vite'

const require = createRequire(import.meta.url)

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')))
}

const config: StorybookConfig = {
  addons: [
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-themes'),
    getAbsolutePath('@chromatic-com/storybook'),
  ],
  docs: {},
  framework: {
    name: getAbsolutePath('@storybook/nextjs-vite'),
    options: {},
  },
  stories: ['../src/**/*.stories.@(ts|tsx)'],
}
export default config
