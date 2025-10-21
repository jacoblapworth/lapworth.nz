import { styled } from '@/styled/jsx'

const Container = styled('div', {
  base: {
    alignItems: 'center',
    display: 'grid',
    flexGrow: 1,
    justifyContent: 'flex-start',
    minWidth: 0,
    truncate: true,
  },
  defaultVariants: {
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
    variant: {
      accessor: {
        paddingInline: 6,
        truncate: true,
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

export function DataCell({ children, alignment, variant }: Props) {
  return (
    <Container alignment={alignment} variant={variant}>
      {children}
    </Container>
  )
}
