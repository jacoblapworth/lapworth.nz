import type { Metadata } from 'next'

export const metadata: Metadata = {
  description: 'Request a copy of my CV.',
  title: 'CV',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
