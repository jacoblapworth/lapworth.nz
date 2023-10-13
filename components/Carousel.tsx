import { ReactNode } from 'react'

import { styled } from 'styled/jsx'

import { Text } from '@/components/Typography'

interface WithId {
  id: string
}

const Grid = styled('div', {
  base: {
    display: 'grid',
    gridAutoColumns: 128,
    gridAutoRows: 'auto',
    gridAutoFlow: 'column',
    gap: 'md',
    overflowX: 'scroll',
    overflowY: 'visible',
    marginInline: -16,
    paddingBlock: 'md',
    paddingInline: 'md',
    alignItems: 'start',
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
      <Text as="h2" size="large" display>
        {title}
      </Text>
      <Grid>{Items}</Grid>
    </div>
  )
}
