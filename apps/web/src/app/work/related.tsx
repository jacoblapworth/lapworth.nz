import { Text } from '@/components/text'
import { styled } from '@/styled/jsx'
import type { Work } from './work'
import { WorkListItemCompact } from './work-list-item-compact'

const Section = styled('section', {
  base: {
    borderColor: 'border',
    borderTop: '1px solid',
    marginBlockStart: 'xl',
    paddingBlockStart: 'xl',
  },
})

const Ul = styled('ul', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'sm',
    listStyle: 'none',
    marginBlockStart: 'md',
    padding: 0,
  },
})

const Li = styled('li', {
  base: {
    listStyle: 'none',
  },
})

interface RelatedProps {
  posts: Work[]
}

export function Related({ posts }: RelatedProps) {
  if (posts.length === 0) {
    return null
  }

  return (
    <Section>
      <Text as="h2" size="lg">
        Related
      </Text>
      <Ul>
        {posts.map((post) => (
          <Li key={post.slug}>
            <WorkListItemCompact item={post} />
          </Li>
        ))}
      </Ul>
    </Section>
  )
}
