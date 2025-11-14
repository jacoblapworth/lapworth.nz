'use client'

import { DataTableExample } from '@lapworth/xero/examples'
import { Suspense } from 'react'

export default function Page() {
  return (
    <Suspense>
      <DataTableExample />
    </Suspense>
  )
}
