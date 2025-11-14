import { type ReactNode, useId } from 'react'

import { Text } from '@/components/text'
import { styled } from '@/styled/jsx'
import { Section } from './section'

interface WithId {
  id: string
}

const ScrollGrid = styled('div', {
  base: {
    alignItems: 'start',
    display: 'grid',
    gap: 'md',
    gridAutoColumns: 128,
    gridAutoFlow: 'column',
    gridAutoRows: 'auto',
    gridColumn: '1/-1 !important',
    overflowX: 'scroll',
    overflowY: 'auto',
    overscrollBehaviorX: 'contain',
    paddingBlockEnd: 'md',
    paddingInline: 'viewport',
    scrollbarWidth: 'thin',
    scrollPaddingInline: 'viewport',
    scrollSnapAlign: 'start',
    scrollSnapType: 'x mandatory',
  },
})

interface CarouselProps<T extends WithId> {
  title: ReactNode
  items: T[]
  renderItem: (item: T) => ReactNode
}

export function Carousel<T extends WithId>({
  title,
  items,
  renderItem,
}: CarouselProps<T>) {
  const id = useId()

  if (items.length === 0) {
    return null
  }

  const renderedItems = items.map(renderItem)

  return (
    <Section aria-labelledby={id}>
      <Text as="h2" display id={id} size="lg">
        {title}
      </Text>
      <ScrollGrid>{renderedItems}</ScrollGrid>
    </Section>
  )
}
