import type { StorybookConfig } from '@storybook/react-vite'
import path from 'node:path'

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@chromatic-com/storybook',
  ],
  docs: {},
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  viteFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@/styled': path.resolve(__dirname, '../.styled'),
        '@/public': path.resolve(__dirname, '../public'),
        '@': path.resolve(__dirname, '../src'),
      }
    }
    return config
  },
}
export default config
