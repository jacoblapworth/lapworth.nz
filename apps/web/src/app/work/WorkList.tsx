import type { Work } from '@/content'
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

interface WorkListProps {
  work: Work[]
}

export function WorkList({ work }: WorkListProps) {
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
