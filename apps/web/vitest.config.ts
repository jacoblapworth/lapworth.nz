import { storybookNextJsPlugin } from '@storybook/nextjs-vite/vite-plugin'
import react from '@vitejs/plugin-react'
import { defineProject } from 'vitest/config'

export default defineProject({
  plugins: [react(), storybookNextJsPlugin()],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    environment: 'jsdom',
  },
})
