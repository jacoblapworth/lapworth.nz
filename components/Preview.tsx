import { ReactNode } from 'react'

import { ResizableBox, ResizableBoxProps } from 'react-resizable'

import { styled } from '@/styles'

const Container = styled(ResizableBox, {
  // padding: '$md',
  borderRadius: '$md',
  backgroundColor: '$surface',
  boxShadow: '$md',
  position: 'relative',
  paddingInlineEnd: '$md',
  overflow: 'hidden',
})

const Handle = styled('span', {
  position: 'absolute',
  height: '100%',
  width: 16,
  display: 'flex',
  justifyItems: 'center',
  alignItems: 'center',

  '&::after': {
    content: '',
    display: 'flex',
    backgroundColor: '$quaternary',
    borderRadius: '$max',
    width: 4,
    height: 40,
    marginLeft: '6px',
  },

  variants: {
    direction: {
      s: {},
      w: {},
      e: {
        right: 0,
        top: 0,
        cursor: 'ew-resize',
      },
      n: {},
      sw: {},
      nw: {},
      se: {},
      ne: {},
    },
  },
})

type ResizeProps = Pick<ResizableBoxProps, 'width'>

interface PreviewProps extends ResizeProps {
  minWidth?: number
  maxWidth?: number
  children: ReactNode
}

export function ResponsivePreview({
  children,
  width = 300,
  minWidth = 300,
  maxWidth = 1200,
}: PreviewProps) {
  return (
    <Container
      axis="x"
      width={width}
      minConstraints={[minWidth, 0]}
      maxConstraints={[maxWidth, 99999]}
      resizeHandles={['e']}
      handle={(handle, ref) => <Handle ref={ref} direction={handle} />}
    >
      {children}
    </Container>
  )
}

export default ResponsivePreview
