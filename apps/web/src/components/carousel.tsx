import { type ReactNode, useId } from 'react'

import { Text } from '@/components/text'
import { styled } from '@/styled/jsx'

interface WithId {
  id: string
}

const Grid = styled('div', {
  base: {
    alignItems: 'start',
    display: 'grid',
    gap: 'md',
    gridAutoColumns: 128,
    gridAutoFlow: 'column',
    gridAutoRows: 'auto',
    marginInline: -16,
    overflowX: 'scroll',
    overflowY: 'visible',
    paddingBlock: 'md',
    paddingInline: 'md',
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
    <section aria-labelledby={id}>
      <Text as="h2" display id={id} size="lg">
        {title}
      </Text>
      <Grid>{renderedItems}</Grid>
    </section>
  )
}
