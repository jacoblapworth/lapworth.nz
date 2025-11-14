import { storybookNextJsPlugin } from '@storybook/nextjs-vite/vite-plugin'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineProject, type Plugin } from 'vitest/config'

export default defineProject({
  plugins: [tsconfigPaths(), react(), storybookNextJsPlugin()] as Plugin[],
  test: {
    environment: 'jsdom',
  },
})
