import type { Metadata } from 'next'

import { styled, globalCss } from '@/styles'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
}

const Test = styled('div', {
  color: 'magenta',
  backgroundColor: 'gray',
})

export default function Page() {
  globalCss()
  return <Test>Test</Test>
}
