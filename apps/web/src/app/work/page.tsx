import type { Metadata } from 'next'
import { work } from '@/content'
import { styled, VStack } from '@/styled/jsx'
import { WorkListItem } from './WorkListItem'

const _Layout = styled('div', {
  base: {
    columnGap: 'md',
    display: 'grid',
    gap: 'lg',
    marginBlock: 'lg',
    // gridTemplateColumns: 'repeat(8, 1fr)',
  },
})

const Ul = styled('ul', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'lg',
    listStyle: 'inside',
    marginBlock: 'lg',
    marginBlockEnd: 'md',
    maxWidth: 600,
    paddingInlineStart: 'md',
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

export default function Page() {
  return (
    <Ul>
      {work.map((item) => (
        <Li key={item.slug}>
          <WorkListItem item={item} />
        </Li>
      ))}
    </Ul>
  )
}
