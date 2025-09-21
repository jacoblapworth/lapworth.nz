'use client'

import { Panel, PanelGroup, PanelResizer } from '@window-splitter/react'
import type { ReactNode } from 'react'
import type { ResizableBoxProps } from 'react-resizable'

import { styled } from '@/styled/jsx'

const Group = styled(PanelGroup, {
  base: {
    height: 'auto',
  },
})

const Container = styled(
  Panel,
  {
    base: {
      // padding: 'md',
      borderRadius: 'md',
      backgroundColor: 'surface',
      boxShadow: 'md',
      position: 'relative',
      paddingInlineEnd: 'md',
      overflow: 'hidden',
    },
  },
  {
    shouldForwardProp: (prop, variantKeys) => {
      if (['min', 'max'].includes(prop)) {
        return true
      }

      if (variantKeys.includes(prop)) return false

      return false
    },
  },
)

const Handle = styled(PanelResizer, {
  base: {
    // position: 'absolute',
    height: '100%',
    width: '16px',
    display: 'flex',
    justifyItems: 'center',
    alignItems: 'center',

    _after: {
      content: '""',
      display: 'flex',
      backgroundColor: 'quaternary',
      borderRadius: 'max',
      width: 4,
      height: 40,
      marginLeft: '6px',
    },

    _hover: {
      _after: {
        backgroundColor: 'interactive',
      },
    },
  },

  variants: {
    handleAxis: {
      s: {},
      w: {},
      e: {
        // right: 0,
        // top: 0,
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
    <Group style={{ height: 'auto' }}>
      <Container
        min={`${minWidth}px`}
        default={`${width}px`}
        max={`${maxWidth}px`}
      >
        {children}
      </Container>
      <Handle size="24px" handleAxis="e" />
      <Panel />
    </Group>
  )
}

export default ResponsivePreview
