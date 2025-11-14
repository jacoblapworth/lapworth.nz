import type { ReactNode } from 'react'
import { styled } from '@/styled/jsx'
import type { StyledVariantProps } from '@/styled/types'

const Container = styled('div', {
  base: {
    alignItems: 'center',
    display: 'grid',
    minWidth: 0,
    width: '100%',
  },
  defaultVariants: {
    isEditable: false,
    variant: 'accessor',
  },
  variants: {
    alignment: {
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
      start: {
        justifyContent: 'flex-start',
      },
    },
    isEditable: {
      false: {
        paddingInline: 6,
        truncate: true,
      },
      true: {
        paddingBlock: 0,
        paddingInline: 0,
      },
    },
    variant: {
      accessor: {},
      display: {
        justifyContent: 'stretch',
        placeItems: 'stretch',
      },
    },
  },
})

interface Props extends StyledVariantProps<typeof Container> {
  children: ReactNode
}

export function DataCell({ children, ...props }: Props) {
  return <Container {...props}>{children}</Container>
}
