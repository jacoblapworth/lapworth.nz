import type { ReactNode } from 'react'

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

export const Label = styled('div', {
  base: {
    flexGrow: 0,
    lineClamp: 2,
    minWidth: 0,
    overflowWrap: 'break-word',
    textOverflow: 'ellipsis',
    whiteSpace: 'wrap',
  },
  variants: {
    variant: {
      primary: {
        color: 'primary',
        fontSize: 'md',
      },
      secondary: {
        color: 'secondary',
        fontSize: 'sm',
      },
    },
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

  const renderedItems = items.map(renderItem)

  return (
    <div>
      <Text as="h2" display size="lg">
        {title}
      </Text>
      <Grid>{renderedItems}</Grid>
    </div>
  )
}
