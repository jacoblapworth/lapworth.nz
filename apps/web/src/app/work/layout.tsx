import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  description: 'Xero, Vend, Timely, Trade Me',
  robots: {
    index: false,
  },
  title: 'Work',
}

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return children
}
