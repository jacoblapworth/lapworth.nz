import type { Metadata } from 'next'
import { enableDrafts } from '@/flags'
import { getWork } from './work'
import { WorkList } from './work-list'

export const metadata: Metadata = {
  description: 'Xero, Vend, Timely, Trade Me',
  title: 'Work',
}

export default async function Page() {
  const isPreview = await enableDrafts()
  const work = await getWork()

  return (
    <WorkList work={work.filter(({ draft }) => (isPreview ? true : !draft))} />
  )
}
