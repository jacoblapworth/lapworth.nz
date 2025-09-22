import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    devServer: {
      bundler: 'webpack',
      framework: 'next',
    },
  },

  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
  projectId: 'vkazho',
})
