import type { Metadata } from 'next'
import { work } from '@/content'
import { enableDrafts } from '@/flags'
import { styled } from '@/styled/jsx'
import { WorkListItem } from './WorkListItem'

const Ul = styled('ul', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'lg',
    listStyle: 'inside',
    marginBlock: 'lg',
    marginBlockEnd: 'md',
    maxWidth: 600,
    padding: 0,
  },
})

const Li = styled('li', {
  base: {
    listStyle: 'none',
  },
})

export const metadata: Metadata = {
  description: 'Xero, Vend, Timely, Trade Me',
  title: 'Work',
}

export default async function Page() {
  const isPreview =
    process.env.NODE_ENV === 'development' || (await enableDrafts())

  return (
    <Ul>
      {work
        .filter(({ draft }) => (isPreview ? true : !draft))
        .map((item) => (
          <Li key={item.slug}>
            <WorkListItem item={item} />
          </Li>
        ))}
    </Ul>
  )
}
