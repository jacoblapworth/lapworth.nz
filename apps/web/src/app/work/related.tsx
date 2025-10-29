import { Text } from '@/components/text'
import { styled } from '@/styled/jsx'
import type { Work } from './work'
import { WorkListItemCard } from './work-list-item-card'

const Section = styled('section', {
  base: {
    backgroundColor: 'muted',
    borderRadius: 'lg',
    marginBlockStart: '2xl',
    marginInline: 'calc(-1 * var(--spacing-md))',
    padding: 'xl',
    width: 'auto',
  },
})

const Container = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'md',
  },
})

const Grid = styled('ul', {
  base: {
    display: 'grid',
    gap: 'md',
    gridTemplateColumns: {
      base: '1fr',
      lg: 'repeat(3, 1fr)',
      md: 'repeat(2, 1fr)',
    },
    listStyle: 'none',
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
      <Container>
        <Text as="h2" bold size="lg">
          Related
        </Text>
        <Grid>
          {posts.map((post) => (
            <Li key={post.slug}>
              <WorkListItemCard item={post} />
            </Li>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
