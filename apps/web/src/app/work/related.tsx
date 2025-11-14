import { Text } from '@/components/text'
import { styled } from '@/styled/jsx'
import type { Work } from './work'
import { WorkListItemCard } from './work-list-item-card'

const Section = styled('section', {
  base: {
    backgroundColor: 'muted',
    border: 'muted',
    display: 'flex',
    flexDirection: 'column',
    gap: 'md',
    padding: 'md',
    width: '100%',
  },
})

const Grid = styled('ul', {
  base: {
    display: 'grid',
    gap: 'md',
    gridAutoRows: 'auto',
    gridTemplateColumns: {
      base: '1fr',
      md: 'repeat(auto-fill, 200px)',
    },
    gridTemplateRows: {
      base: 'auto',
      md: '1fr auto',
    },
    listStyle: 'none',
    padding: 0,
    rowGap: {
      base: 'lg',
      md: 'sm',
    },
  },
})

const Li = styled('li', {
  base: {
    display: 'inherit',
    gridRow: {
      md: '1/-1',
    },
    gridTemplateRows: {
      base: '1fr auto',
      md: 'subgrid',
    },
    listStyle: 'none',
  },
})

interface RelatedProps {
  posts?: Work[]
}

export function Related({ posts }: RelatedProps) {
  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <Section>
      <Text as="h2" size="lg">
        Related
      </Text>
      <Grid>
        {posts.map((post) => (
          <Li key={post.slug}>
            <WorkListItemCard item={post} />
          </Li>
        ))}
      </Grid>
    </Section>
  )
}
