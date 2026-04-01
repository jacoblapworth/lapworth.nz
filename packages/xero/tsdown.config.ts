import preserveUseClientDirective from 'rollup-plugin-preserve-use-client'

import { defineConfig } from 'tsdown'

export default defineConfig({
  deps: {
    neverBundle: ['react', 'react-dom'],
  },
  dts: true,
  entry: ['./src/index.ts', './src/examples/index.ts'],
  outputOptions: {
    preserveModules: true,
  },
  platform: 'neutral',
  plugins: [preserveUseClientDirective()],
  // exports: {
  //   customExports(pkg) {
  //     pkg['./styles.css'] = './.styled/styles.css'
  //     return pkg
  //   },x
  // },
})
