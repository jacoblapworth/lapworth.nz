import type { Metadata } from 'next'
import { enableDrafts } from '@/flags'
import { work } from './work'
import { WorkList } from './work-list'

export const metadata: Metadata = {
  description: 'Xero, Vend, Timely, Trade Me',
  title: 'Work',
}

export default async function Page() {
  const isPreview = await enableDrafts()

  return (
    <WorkList work={work.filter(({ draft }) => (isPreview ? true : !draft))} />
  )
}
