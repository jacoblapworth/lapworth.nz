import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Xero, Vend, Timely, Trade Me',
  robots: {
    index: false,
  },
}

export default function Layout({ children }: LayoutProps<'/work'>) {
  return children
}
