import preserveUseClientDirective from 'rollup-plugin-preserve-use-client'

import { defineConfig } from 'tsdown'

export default defineConfig({
  dts: true,
  entry: ['./src/index.ts', './src/components/*', './src/examples/*'],
  exports: {
    customExports(pkg) {
      pkg['./styles.css'] = './.styled/styles.css'
      return pkg
    },
  },
  outputOptions: {
    preserveModules: true,
  },
  platform: 'neutral',
  plugins: [preserveUseClientDirective()],
})
