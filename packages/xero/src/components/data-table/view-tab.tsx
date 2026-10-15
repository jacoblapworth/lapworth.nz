import * as Ariakit from '@ariakit/react'
import { motion } from 'motion/react'
import { styled } from '@/styled/jsx'

export const BorderHighlight = styled(motion.div, {
  base: {
    borderColor: 'action',
    borderRadius: 6,
    borderStyle: 'solid',
    borderWidth: 1,
    inset: 0,
    pointerEvents: 'none',
    position: 'absolute',
  },
})

export const ViewTab = styled(Ariakit.Tab, {
  base: {
    _after: {
      backgroundColor: 'border.subtle',
      // content: '""',
      display: 'block',
      insetBlock: '1',
      position: 'absolute',
      right: '-3px',
      width: '1px',
    },
    _last: {
      _after: {
        display: 'none',
      },
    },
    _selected: {
      _hover: {
        backgroundColor: 'action/5',
        borderColor: 'action',
      },
      backgroundColor: 'background',
      borderColor: 'border.regular',
      color: 'action',
      zIndex: 1,
    },
    backgroundColor: {
      _hover: 'background.tertiary',
    },
    borderColor: {
      _hover: 'border.subtle',
      base: 'transparent',
    },
    borderRadius: 'md',
    borderStyle: 'solid',
    borderWidth: 1,
    color: 'text',
    cursor: 'pointer',
    fontSize: 13,
    fontWeight: 500,
    paddingBlock: '1',
    paddingInline: '2',
    position: 'relative',
  },
})
