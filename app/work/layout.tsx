import { ReactNode } from 'react'

import { Metadata } from 'next'

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
