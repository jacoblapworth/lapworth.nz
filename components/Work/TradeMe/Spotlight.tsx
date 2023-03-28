import { FC, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import { tradeMeTheme } from '@/app/work/trademe/theme'
import { styled } from '@/styles'

import {
  BagIcon,
  BriefcaseIcon,
  CarIcon,
  CrossIcon,
  HouseIcon,
  WrenchIcon,
} from './Icons'

const Circle = styled('div', {
  height: '54px',
  width: '54px',
  border: 'none',
  borderRadius: '50%',
  gridArea: 'icon',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  variants: {
    vertical: {
      marketplace: {
        background: '$marketplace',
        borderColor: '$marketplace',
        color: '$marketplace',
      },
      jobs: {
        background: '$jobs',
        borderColor: '$jobs',
        color: '$jobs',
      },
      property: {
        background: '$property',
        borderColor: '$property',
        color: '$property',
      },
      motors: {
        background: '$motors',
        borderColor: '$motors',
        color: '$motors',
      },
      services: {
        background: '$services',
        borderColor: '$services',
        color: '$services',
      },
    },

    isActive: {
      true: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderStyle: 'solid',
      },
      false: {
        color: '#fff !important',
      },
    },
  },
  defaultVariants: {
    isActive: false,
  },
})

const Label = styled('div', {
  fontSize: '12px',
  textAlign: 'center',
  textTransform: 'capitalize',
  gridArea: 'label',
})

const Button = styled(motion.button, {
  placeItems: 'center',
  placeContent: 'center',
  display: 'grid',
  gap: 4,
  gridTemplateAreas: '"icon" "label"',
  padding: 0,
  border: 'none',
  background: 'none',
  cursor: 'pointer',

  '&:hover': {
    filter: 'brightness(0.8)',
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
        initial={{ opacity: 0, rotateZ: -90 }}
        animate={{ opacity: 1, rotateZ: 0 }}
        exit={{ opacity: 0, rotateZ: 90 }}
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
    <Button onClick={onClick} animate {...rest}>
      <Circle vertical={vertical} isActive={isActive}>
        <AnimatePresence>
          <Icon vertical={vertical} isActive={isActive} />
        </AnimatePresence>
      </Circle>
      <Label>{label}</Label>
    </Button>
  )
}

const Grid = styled(motion.div, {
  padding: 16,
  borderRadius: '$sm',
  backgroundColor: '$background',
  display: 'grid',
  gap: 16,
  gridTemplateColumns: 'repeat(5, 54px)',
  justifyContent: 'center',
})

interface Spot {
  label: string
  vertical: Vertical
  icon: string
  position: number
}

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
          key={vertical}
          label={vertical}
          vertical={vertical}
          isActive={activeVertical === vertical}
          onClick={onClick}
        />
      ))}
    </Grid>
  )
}

export const MarketplaceSpotlights = () => {
  return (
    <Spot
      label={'Marketplace'}
      vertical={verticals[0]}
      isActive={true}
      onClick={() => {
        return
      }}
    />
  )
}

export const SpotlightsPreview = () => {
  const Layout = styled('div', {
    width: '100%',
    display: 'flex',
    justifyContent: 'end',
  })

  const variants = {
    initial: {
      marginLeft: -24,
    },
    hover: {
      marginLeft: -16,
    },
  }

  return (
    <Layout className={tradeMeTheme}>
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
