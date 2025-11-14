import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineProject } from 'vitest/config'

export default defineProject({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: 'jsdom',
  },
})
