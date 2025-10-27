'use client'

import { AnimatePresence, motion } from 'motion/react'
import { type FC, useState } from 'react'

import { styled } from '@/styled/jsx'

import {
  BagIcon,
  BriefcaseIcon,
  CarIcon,
  CrossIcon,
  HouseIcon,
  WrenchIcon,
} from './Icons'

const Circle = styled('div', {
  base: {
    alignItems: 'center',
    border: 'none',
    borderRadius: '50%',
    display: 'flex',
    gridArea: 'icon',
    height: '54px',
    justifyContent: 'center',
    width: '54px',
  },
  defaultVariants: {
    isActive: false,
  },

  variants: {
    isActive: {
      false: {
        color: '#fff !important',
      },
      true: {
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderWidth: 2,
      },
    },
    vertical: {
      jobs: {
        background: 'jobs',
        borderColor: 'jobs',
        color: 'jobs',
      },
      marketplace: {
        background: 'marketplace',
        borderColor: 'marketplace',
        color: 'marketplace',
      },
      motors: {
        background: 'motors',
        borderColor: 'motors',
        color: 'motors',
      },
      property: {
        background: 'property',
        borderColor: 'property',
        color: 'property',
      },
      services: {
        background: 'services',
        borderColor: 'services',
        color: 'services',
      },
    },
  },
})

const Label = styled('div', {
  base: {
    fontSize: '12px',
    gridArea: 'label',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
})

const Button = styled(motion.button, {
  base: {
    _hover: {
      filter: 'brightness(0.8)',
    },
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'grid',
    gap: 4,
    gridTemplateAreas: '"icon" "label"',
    padding: 0,
    placeContent: 'center',
    placeItems: 'center',
  },
})

const verticals = [
  'marketplace',
  'jobs',
  'property',
  'motors',
  'services',
] as const

type Vertical = (typeof verticals)[number]

interface VerticalIconProps {
  vertical: Vertical
  isActive?: boolean
}

const Icon: FC<VerticalIconProps> = ({ vertical, isActive }) => {
  if (isActive) {
    return (
      <motion.div
        // transition
        animate={{ opacity: 1, rotateZ: 0 }}
        exit={{ opacity: 0, rotateZ: 90 }}
        initial={{ opacity: 0, rotateZ: -90 }}
      >
        <CrossIcon />
      </motion.div>
    )
  }

  switch (vertical) {
    case 'marketplace':
      return <BagIcon />
    case 'jobs':
      return <BriefcaseIcon />
    case 'property':
      return <HouseIcon />
    case 'motors':
      return <CarIcon />
    case 'services':
      return <WrenchIcon />
    default:
      return null
  }
}

interface SpotProps {
  label: string
  isActive?: boolean
  onClick: (vertical?: Vertical) => void
  vertical: Vertical
}

const Spot: FC<SpotProps> = ({
  label,
  vertical,
  isActive,
  onClick: _onClick,
  ...rest
}) => {
  const onClick = () => {
    _onClick(isActive ? undefined : vertical)
  }

  return (
    <Button animate onClick={onClick} {...rest}>
      <Circle isActive={isActive} vertical={vertical}>
        <AnimatePresence>
          <Icon isActive={isActive} vertical={vertical} />
        </AnimatePresence>
      </Circle>
      <Label>{label}</Label>
    </Button>
  )
}

const Grid = styled(motion.div, {
  base: {
    backgroundColor: 'background',
    borderRadius: 'sm',
    display: 'grid',
    gap: 16,
    gridTemplateColumns: 'repeat(5, 54px)',
    justifyContent: 'center',
    padding: 16,
  },
})

export function Spotlights() {
  const [activeVertical, setActiveVertical] = useState<Vertical | undefined>(
    undefined,
  )

  const onClick = (vertical?: Vertical) => {
    setActiveVertical(vertical)
  }

  // const marketplaceSpots = ['Deals', 'Stores', 'Local']

  return (
    <Grid layout>
      {verticals.map((vertical) => (
        <Spot
          isActive={activeVertical === vertical}
          key={vertical}
          label={vertical}
          onClick={onClick}
          vertical={vertical}
        />
      ))}
    </Grid>
  )
}

export const MarketplaceSpotlights = () => {
  return (
    <Spot
      isActive={true}
      label={'Marketplace'}
      onClick={() => {
        return
      }}
      vertical={verticals[0]}
    />
  )
}

export const SpotlightsPreview = () => {
  const Layout = styled('div', {
    base: {
      display: 'flex',
      justifyContent: 'end',
      width: '100%',
    },
  })

  const variants = {
    hover: {
      marginLeft: -16,
    },
    initial: {
      marginLeft: -24,
    },
  }

  return (
    <Layout>
      {verticals.map((vertical, i) => (
        <motion.div
          key={vertical}
          style={{ zIndex: 10 - i }}
          variants={variants}
          // initial="initial"
          // whileHover="hover"
          // animate={isHover ? 'hover' : 'initial'}
          // exit="initial"
        >
          <Circle vertical={vertical}>
            <Icon vertical={vertical} />
          </Circle>
        </motion.div>
      ))}
    </Layout>
  )
}
