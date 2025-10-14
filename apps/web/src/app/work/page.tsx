import type { Metadata } from 'next'
import { work } from '@/content'
import { enableDrafts } from '@/flags'
import { WorkList } from './WorkList'

export const metadata: Metadata = {
  description: 'Xero, Vend, Timely, Trade Me',
  title: 'Work',
}

export default async function Page() {
  const isPreview =
    process.env.NODE_ENV === 'development' || (await enableDrafts())

  return (
    <WorkList work={work.filter(({ draft }) => (isPreview ? true : !draft))} />
  )
}
