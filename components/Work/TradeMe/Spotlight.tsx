import { FC, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

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
        color: '#fff',
      },
    },
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

type Vertical = typeof verticals[number]

interface VerticalIconProps {
  vertical: Vertical
  isActive?: boolean
}

const Icon: FC<VerticalIconProps> = ({ vertical, isActive }) => {
  if (isActive) {
    return (
      <AnimatePresence>
        <CrossIcon />
      </AnimatePresence>
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
        <Icon vertical={vertical} isActive={isActive} />
      </Circle>
      <Label>{label}</Label>
    </Button>
  )
}

const Grid = styled(motion.div, {
  padding: 16,
  borderRadius: '$sm',
  backgroundColor: '#fff',
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

const Spotlights: FC = () => {
  const [activeVertical, setActiveVertical] = useState<Vertical | undefined>(
    undefined,
  )

  const onClick = (vertical?: Vertical) => {
    setActiveVertical(vertical)
  }

  const marketplaceSpots = ['Deals', 'Stores', 'Local']

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

export default Spotlights
