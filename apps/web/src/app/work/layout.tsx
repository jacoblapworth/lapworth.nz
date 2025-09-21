import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Xero, Vend, Timely, Trade Me',
  robots: {
    index: false,
  },
}

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return children
}
