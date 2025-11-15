import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineMain } from '@storybook/nextjs-vite/node'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): string {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)))
}

export default defineMain({
  addons: [
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-themes'),
    getAbsolutePath('@storybook/addon-vitest'),
    getAbsolutePath('@chromatic-com/storybook'),
    'storybook-next-intl',
  ],
  framework: {
    name: getAbsolutePath('@storybook/nextjs-vite'),
    options: {},
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
})
