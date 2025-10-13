import * as Ariakit from '@ariakit/react'
import { motion } from 'motion/react'
import { styled } from '@/styled/jsx'

export const BorderHighlight = styled(motion.div, {
  base: {
    borderColor: 'xero.action',
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
      backgroundColor: 'xero.border.subtle',
      // content: '""',
      display: 'block',
      insetBlock: 4,
      position: 'absolute',
      right: -3,
      width: 1,
    },
    _last: {
      _after: {
        display: 'none',
      },
    },
    _selected: {
      _hover: {
        backgroundColor: 'xero.action/5',
        borderColor: 'xero.action',
      },
      backgroundColor: 'white',
      borderColor: 'xero.action',
      color: 'xero.action',
    },
    backgroundColor: {
      _hover: 'xero.background.tertiary',
      base: '#F6F6F8',
    },
    borderColor: {
      _hover: 'xero.border.subtle',
      base: 'transparent',
    },
    borderRadius: 'md',
    borderStyle: 'solid',
    borderWidth: 1,
    color: 'xero.text',
    cursor: 'pointer',
    fontSize: 13,
    fontWeight: 500,
    paddingBlock: 4,
    paddingInline: 8,
    position: 'relative',
  },
})
