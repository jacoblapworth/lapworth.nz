'use cache'

import { styled } from '@/styled/jsx'
import type { Work } from './work'
import { WorkListItem } from './work-list-item'

const Ul = styled('ul', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'xl',
    listStyle: 'none',
    marginBlock: 'xl',
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

interface WorkListProps {
  work: Work[]
}

export async function WorkList({ work }: WorkListProps) {
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
