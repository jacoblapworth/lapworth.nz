'use client'
import {
  TooltipAnchor,
  TooltipArrow,
  TooltipProvider,
  VisuallyHidden,
} from '@ariakit/react'
import { addSeconds, isFuture } from 'date-fns'
import { PowerIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import NextImage from 'next/image'
import { useFormatter, useNow } from 'next-intl'
import { useCallback, useRef, useState } from 'react'
import { Tooltip } from '@/components/Tooltip'
import { css, cva } from '@/styled/css'
import { HStack, styled } from '@/styled/jsx'
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
    title: 'Ready',
  },
}

type State =
  | {
      status: 'off'
      readyTime?: null
    }
  | {
      status: 'heating-up'
      readyTime: Date
    }
  | {
      status: 'on'
      readyTime?: null
    }

export function LaMarzoccoWidget() {
  const WARMUP_DURATION_SECONDS = 10
  const [state, setState] = useState<State>({ status: 'off' })
  const { title } = State[state.status]
  const [showTooltip, setShowTooltip] = useState(true)
  const now = useNow({ updateInterval: 1000 })
  const format = useFormatter()
  const isOn = ['on', 'heating-up'].includes(state.status)
  const timeout = useRef<NodeJS.Timeout | null>(null)

  const startHeating = useCallback(() => {
    const ready = addSeconds(now, WARMUP_DURATION_SECONDS)
    setState({ readyTime: ready, status: 'heating-up' })

    timeout.current = setTimeout(() => {
      setState({ status: 'on' })
      timeout.current = null
    }, WARMUP_DURATION_SECONDS * 1000)
  }, [timeout, now])

  const onPowerToggle = () => {
    setShowTooltip(false)

    if (state.status === 'off') {
      startHeating()
    } else {
      if (timeout.current) {
        clearTimeout(timeout.current)
        timeout.current = null
      }
      setState({ status: 'off' })
    }
  }

  return (
    <HStack
      alignItems="start"
      backgroundColor="background"
      borderColor="border"
      borderRadius={40}
      borderStyle="solid"
      borderWidth={1}
      boxShadow="rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
      css={{
        '--colors-accent': isOn ? '#7F0000' : '#E3E3DB',
        '--colors-background': { _dark: '#3D3A38', base: '#F1F0E4' },
        '--colors-border': { _dark: '#211F14', base: '#E3E3DB' },
        '--colors-primary': { _dark: '#E3E3DB', base: '#211F14' },
        '--colors-secondary': { _dark: '#F1F0E4', base: '#B0B0A4' },
      }}
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
      <motion.div
        className={css({
          alignItems: 'start',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 2,
          height: '100%',
          justifyContent: 'space-between',
        })}
        layout
      >
        <motion.div>
          <Logo color="#9C9B90" height={40} />
        </motion.div>
        <motion.div
          className={css({
            alignItems: 'start',
            display: 'flex',
            flexDirection: 'column',
            lineHeight: '1',
          })}
          layout
        >
          <motion.div
            className={css({
              color: 'secondary',
              fontSize: 18,
              fontVariationSettings: '"wdth" 115',
              fontWeight: 600,
              textTransform: 'uppercase',
            })}
            layout
          >
            Linea Micra
          </motion.div>
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className={css({
              color: 'primary',
              fontSize: 39,
              fontVariationSettings: '"wdth" 50',
              fontWeight: 700,
              textTransform: 'uppercase',
            })}
            exit={{ opacity: 0, scale: 0.5 }}
            initial={{ opacity: 0, scale: 0.5 }}
            key={`${state.status}-title`}
            layout
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.div>
          <AnimatePresence>
            <motion.div
              animate={{ opacity: 1 }}
              className={css({
                color: 'primary',
                fontVariantNumeric: 'tabular-nums',
                fontWeight: 500,
              })}
              exit={{ height: 0, opacity: 0 }}
              initial={{ opacity: 0 }}
              key={`${state.status}-subtitle`}
              transition={{ duration: 0.2 }}
            >
              {state.readyTime && isFuture(state.readyTime)
                ? `Ready ${format.relativeTime(state.readyTime, now)}`
                : null}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
      <TooltipProvider open={showTooltip}>
        <TooltipAnchor
          render={
            <motion.button
              className={PowerButtonStyles({ isOn })}
              onClick={onPowerToggle}
              whileTap={{ scale: 0.95 }}
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
