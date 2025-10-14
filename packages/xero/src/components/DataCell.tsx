import { styled } from '@/styled/jsx'

const Container = styled('div', {
  base: {
    alignItems: 'center',
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'stretch',
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
      display: {},
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
