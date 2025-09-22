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
      backgroundColor: 'surface',
      // padding: 'md',
      borderRadius: 'md',
      boxShadow: 'md',
      overflow: 'hidden',
      paddingInlineEnd: 'md',
      position: 'relative',
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
    _after: {
      backgroundColor: 'quaternary',
      borderRadius: 'max',
      content: '""',
      display: 'flex',
      height: 40,
      marginLeft: '6px',
      width: 4,
    },

    _hover: {
      _after: {
        backgroundColor: 'interactive',
      },
    },
    alignItems: 'center',
    display: 'flex',
    // position: 'absolute',
    height: '100%',
    justifyItems: 'center',
    width: '16px',
  },

  variants: {
    handleAxis: {
      e: {
        // right: 0,
        // top: 0,
        cursor: 'ew-resize',
      },
      n: {},
      ne: {},
      nw: {},
      s: {},
      se: {},
      sw: {},
      w: {},
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
