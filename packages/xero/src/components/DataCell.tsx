import { styled } from '@/styled/jsx'

const Container = styled('div', {
  base: {
    alignItems: 'center',
    display: 'grid',
    minWidth: 0,
    width: '100%',
    // truncate: true,
  },
  defaultVariants: {
    // alignment: 'flex-start',
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
      true: {
        paddingBlock: 0,
        paddingInline: 0,
      },
    },
    variant: {
      accessor: {
        paddingInline: 6,
        // truncate: true,
      },
      display: {
        justifyContent: 'stretch',
        placeItems: 'stretch',
      },
    },
  },
})

interface Props {
  children: React.ReactNode
  alignment?: 'start' | 'center' | 'end'
  variant?: 'accessor' | 'display'
}

export function DataCell({ children, ...props }: Props) {
  return <Container {...props}>{children}</Container>
}
