import { storybookNextJsPlugin } from '@storybook/nextjs-vite/vite-plugin'

import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineProject } from 'vitest/config'

export default defineProject({
  plugins: [tsconfigPaths(), react(), storybookNextJsPlugin()],
  test: {
    environment: 'jsdom',
  },
})
