'use client'

import dynamic from 'next/dynamic'
import { css } from '@/styled/css'
import { CVDocument } from '../pdf'

export default function Page() {
  const PDFViewer = dynamic(() => import('./pdf-viewer'), { ssr: false })

  return (
    <PDFViewer className={css({ flex: 1, height: '100vh', width: '100%' })}>
      <CVDocument />
    </PDFViewer>
  )
}
