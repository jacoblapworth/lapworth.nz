import preserveUseClientDirective from 'rollup-plugin-preserve-use-client'

import { defineConfig } from 'tsdown'

export default defineConfig({
  dts: true,
  entry: [
    './src/index.ts',
    './src/examples/index.ts',
    './src/components/index.ts',
    './src/components/**/!(*.stories).*',
    './src/examples/**/!(*.stories).*',
  ],
  external: [/.styled/, 'lucide-react', '@gsap/react'],
  outputOptions: {
    preserveModules: true,
  },
  platform: 'neutral',
  plugins: [preserveUseClientDirective()],
  // exports: {
  //   customExports(pkg) {
  //     pkg['./styles.css'] = './.styled/styles.css'
  //     return pkg
  //   },
  // },
  skipNodeModulesBundle: true,
})
