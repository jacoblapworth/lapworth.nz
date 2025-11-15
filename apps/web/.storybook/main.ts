import { defineMain } from "@storybook/nextjs-vite/node";
import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'

function getAbsolutePath(value: string): string {
  const require = createRequire(import.meta.url)
  return dirname(require.resolve(join(value, 'package.json')))
}

export default defineMain({
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
});
