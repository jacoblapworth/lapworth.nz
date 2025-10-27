'use client'

import { DataEditableCell } from '@lapworth/xero/DataEditableCell'
import { Suspense } from 'react'

export default function Page() {
  return (
    <Suspense>
      <DataEditableCell />
    </Suspense>
  )
}
