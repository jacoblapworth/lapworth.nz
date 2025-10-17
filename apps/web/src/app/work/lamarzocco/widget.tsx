'use client'

import {
  TooltipAnchor,
  TooltipArrow,
  TooltipProvider,
  VisuallyHidden,
} from '@ariakit/react'
import { PowerIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import NextImage from 'next/image'
import { useEffect, useState } from 'react'
import { Tooltip } from '@/components/Tooltip'
import { cva } from '@/styled/css'
import { Box, HStack, styled, VStack } from '@/styled/jsx'
import { Logo } from './logo'
import MicraStainlessFront from './micra-stainless-front.png'

const MachineImage = styled(NextImage, {
  base: {
    height: '100%',
    objectFit: 'cover',
    width: 'auto',
  },
})

const PowerButtonStyles = cva({
  base: {
    _active: {
      filter: 'brightness(1.1)',
    },
    _hover: {
      opacity: 0.8,
    },
    backgroundColor: '#E3E3DB',
    borderRadius: 9999,

    color: '#D3CAB6',
    cursor: 'pointer',
    padding: 12,
    transition: 'background-color 0.2s, color 0.2s',
  },
  variants: {
    isOn: {
      true: {
        backgroundColor: '#7F0000',
        color: '#FD4E52',
      },
    },
  },
})

type State = 'on' | 'off' | 'heating-up'

const State = {
  'heating-up': {
    subtitle: 'Ready in 2 minutes',
    title: 'Heating Up',
  },
  off: {
    subtitle: 'Turning on at 7:00am',
    title: 'Standby',
  },
  on: {
    subtitle: 'Turning off in 2 minutes',
    title: 'Heating Up',
  },
}

export function LaMarzoccoWidget() {
  const [state, setState] = useState<State>('off')
  const { subtitle, title } = State[state]
  const [showTooltip, setShowTooltip] = useState(true)
  const isOn = ['on', 'heating-up'].includes(state)

  useEffect(() => {
    const timer = setTimeout(() => {
      setState('on')
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <HStack
      alignItems="start"
      backgroundColor="#F1F0E4"
      borderColor="#E3E3DB"
      borderRadius={40}
      borderStyle="solid"
      borderWidth={1}
      boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
      gap={32}
      height={245}
      padding={24}
      width={520}
    >
      <MachineImage
        alt="La Marzocco Linea Micra stainless steel"
        objectFit="contain"
        src={MicraStainlessFront}
      />
      <VStack
        alignItems="start"
        flexGrow={2}
        height="100%"
        justifyContent="space-between"
      >
        <Logo color="#9C9B90" height={40} />
        <VStack alignItems="start" gap={2} lineHeight="1">
          <Box
            color="#B0B0A4"
            fontSize={18}
            fontVariationSettings='"wdth" 115'
            fontWeight={600}
            textTransform="uppercase"
          >
            Linea Micra
          </Box>
          <Box
            color="#211F14"
            fontSize={39}
            fontVariationSettings='"wdth" 50'
            fontWeight={700}
            textTransform="uppercase"
          >
            {title}
          </Box>

          <AnimatePresence>
            <Box color="#211F14" fontWeight={500}>
              <motion.div
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={state}
                transition={{ duration: 1 }}
              >
                {subtitle}
              </motion.div>
            </Box>
          </AnimatePresence>
        </VStack>
      </VStack>
      <TooltipProvider open={showTooltip}>
        <TooltipAnchor
          render={
            <motion.button
              className={PowerButtonStyles({ isOn })}
              onClick={() => {
                setShowTooltip(false)
                setState((v) => (v !== 'off' ? 'off' : 'heating-up'))
              }}
            />
          }
        >
          <VisuallyHidden>Toggle power</VisuallyHidden>
          <PowerIcon size={28} />
        </TooltipAnchor>
        <Tooltip>
          <TooltipArrow />
          Click me
        </Tooltip>
      </TooltipProvider>
    </HStack>
  )
}
