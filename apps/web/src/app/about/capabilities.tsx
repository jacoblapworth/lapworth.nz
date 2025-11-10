import { ArrowRightIcon } from 'lucide-react'
import { useId } from 'react'
import { Section } from '@/components/section'
import { Text } from '@/components/text'
import { styled } from '@/styled/jsx'

const capabilities = [
  'Design Systems',
  'Product Design',
  'Code Prototyping',
  'Design for AI',
  'Interaction & Motion',
  'User Research',
  'Accessibility',
  'Documentation',
]

const Grid = styled('ul', {
  base: {
    columnGap: 'md',
    display: 'grid',
    gridTemplateColumns: {
      base: 'repeat(auto-fit, minmax(12rem, 1fr))',
      md: 'repeat(auto-fit, minmax(15rem, 1fr))',
    },
    listStyle: 'none',
    rowGap: 'xs',
  },
})

const ListItem = styled('li', {
  base: {
    alignItems: 'center',
    display: 'flex',
    gap: 'sm',

    position: 'relative',
  },
})

export function Capabilities() {
  const id = useId()
  return (
    <Section aria-labelledby={id}>
      <Text as="h2" display id={id} size="lg">
        Capabilities
      </Text>
      <Grid>
        {capabilities.map((capability) => (
          <ListItem key={capability}>
            <ArrowRightIcon size={20} />
            {capability}
          </ListItem>
        ))}
      </Grid>
    </Section>
  )
}
