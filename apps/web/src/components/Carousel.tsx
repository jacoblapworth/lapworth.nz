import type { ReactNode } from 'react'

import { Text } from '@/components/Typography'
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
  if (items.length === 0) {
    return null
  }

  const Items = items.map((ele) => renderItem(ele))

  return (
    <div>
      <Text as="h2" size="lg" display>
        {title}
      </Text>
      <Grid>{Items}</Grid>
    </div>
  )
}
