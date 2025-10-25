import type { ReactNode } from 'react'
import '@lapworth/xero/styles.css'

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return children
}
