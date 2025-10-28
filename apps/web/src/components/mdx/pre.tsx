import { styled } from '@/styled/jsx'

export const Container = styled('pre', {
  base: {
    // backgroundColor: 'surface',
    // borderRadius: 'md',
    // border: 'muted',
    // overflowX: 'scroll',
    // paddingBlock: 'md',
  },
})

export function Pre(props: React.ComponentProps<'pre'>) {
  console.log({ props })
  return <Container {...props} />
}
