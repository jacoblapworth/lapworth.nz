'use client'
import {
  TooltipAnchor,
  TooltipArrow,
  TooltipProvider,
  VisuallyHidden,
} from '@ariakit/react'
import NumberFlow from '@number-flow/react'
import { addSeconds } from 'date-fns'
import { PowerIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import NextImage from 'next/image'
import { useFormatter, useNow } from 'next-intl'
import { useCallback, useRef, useState } from 'react'
import { Tooltip } from '@/components/tooltip'
import { css, cva } from '@/styled/css'
import { HStack, styled } from '@/styled/jsx'
import { Logo } from './logo'
import MicraStainlessFront from './micra-stainless-front.png'

const MachineImage = styled(NextImage, {
  base: {
    height: '100%',
    objectFit: 'cover',
    width: 'auto',
    zIndex: 10,
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
    borderRadius: 9999,
    cursor: 'pointer',
    padding: 12,
    transition: 'background-color 0.2s, color 0.2s',
    zIndex: 10,
  },
  defaultVariants: {
    status: 'off',
  },
  variants: {
    status: {
      heating: {
        backgroundColor: '#7F0000',
        color: '#FD4E52',
      },
      off: {
        backgroundColor: {
          _dark: '#2C2A20',
          _light: '#E3E3DB',
        },
        color: {
          _dark: '#9C9B90',
          _light: '#D3CAB6',
        },
      },
      on: {
        backgroundColor: '#5CB75F',
        color: 'white/50',
      },
    },
  },
})

type State =
  | {
      status: 'off'
      time?: null
    }
  | {
      status: 'heating'
      time: Date
    }
  | {
      status: 'on'
      time: Date
    }

const WARMUP_DURATION_SECONDS = 10
const SLEEP_DURATION_SECONDS = 60 * 5

export function LaMarzoccoWidget() {
  const [state, setState] = useState<State>({ status: 'off' })
  const [showTooltip, setShowTooltip] = useState(true)
  const now = useNow({ updateInterval: 1000 })
  const format = useFormatter()
  const timeout = useRef<NodeJS.Timeout | null>(null)

  const setOff = useCallback(() => {
    setState({ status: 'off' })
  }, [])

  const setOn = useCallback(() => {
    setState({
      status: 'on',
      time: addSeconds(now, SLEEP_DURATION_SECONDS),
    })
    timeout.current = setTimeout(setOff, SLEEP_DURATION_SECONDS * 1000)
  }, [timeout, now, setOff])

  const startHeating = useCallback(() => {
    setState({
      status: 'heating',
      time: addSeconds(now, WARMUP_DURATION_SECONDS),
    })
    timeout.current = setTimeout(setOn, WARMUP_DURATION_SECONDS * 1000)
  }, [timeout, now, setOn])

  const onPowerToggle = useCallback(() => {
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
  }, [startHeating, state.status])

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
        '--colors-background': { _dark: '#211F14', _light: '#F1F0E4' },
        '--colors-border': { _dark: '#211F14', _light: '#E3E3DB' },
        '--colors-primary': { _dark: '#E3E3DB', _light: '#211F14' },
        '--colors-secondary': { _dark: '#B0B0A4', _light: '#3D3A38' },
        '--colors-tertiary': { _dark: '#9B9B8C', _light: '#B0B0A4' },
      }}
      gap={32}
      height={245}
      overflow="hidden"
      padding={24}
      position="relative"
      width={520}
    >
      <motion.div
        animate={state.status}
        className={css({
          backgroundColor: {
            _dark: 'rgba(0, 0, 0, 0.2)',
            _light: 'rgba(255, 255, 255, 0.5)',
          },
          bottom: 0,
          height: '100%',
          left: 0,
          pointerEvents: 'none',
          position: 'absolute',
          right: 0,
          top: 0,
          transformOrigin: 'left center',
          width: '100%',
          zIndex: 0,
        })}
        variants={{
          heating: {
            opacity: 1,
            scaleX: 1,
            transition: {
              duration: WARMUP_DURATION_SECONDS,
              ease: 'linear',
            },
          },
          off: {
            opacity: 1,
            scaleX: 0,
          },
          on: {
            opacity: 0,
            scaleX: 0,
            transition: { scaleX: { delay: 0.5, duration: 0 } },
          },
        }}
      />
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
          zIndex: 10,
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
              color: 'tertiary',
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
            {
              {
                heating: 'Heating Up',
                off: 'Standby',
                on: 'Ready',
              }[state.status]
            }
          </motion.div>
          <AnimatePresence mode="wait">
            <motion.div
              animate={{ opacity: 1 }}
              className={css({
                color: 'secondary',
                fontVariantNumeric: 'tabular-nums',
                fontWeight: 500,
                transformOrigin: 'left center',
              })}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              // key={`${state.status}-subtitle`}
              transition={{ duration: 0.1 }}
            >
              {(() => {
                switch (state.status) {
                  case 'off':
                    return 'Turning on at 7:00am'
                  case 'heating':
                    return (
                      <>
                        Ready in{' '}
                        <NumberFlow
                          value={
                            now.getTime() - state.time.getTime() > 0
                              ? 0
                              : Math.ceil(
                                  (state.time.getTime() - now.getTime()) / 1000,
                                )
                          }
                        />{' '}
                        seconds
                      </>
                    )
                  case 'on':
                    return `Sleeping ${format.relativeTime(state.time, now)}`
                }
              })()}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
      <TooltipProvider open={showTooltip}>
        <TooltipAnchor
          render={
            <motion.button
              className={PowerButtonStyles({ status: state.status })}
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
