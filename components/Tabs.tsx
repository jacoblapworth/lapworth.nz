import { ReactNode, useState } from 'react'

import * as RadixTabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

import { styled } from '@/styles'

export const Trigger = styled(RadixTabs.Trigger, {
  all: 'unset',
  cursor: 'pointer',
  paddingBlock: '$sm',
  color: '$tertiary',
  '&[data-state="active"]': {
    color: '$interactive',
  },
  position: 'relative',
})

const Highlight = styled(motion.div, {
  backgroundColor: '$interactive',
  height: 1,
  width: '100%',
  position: 'absolute',
  bottom: -1,
})

interface WrappedTriggerProps extends React.ComponentProps<typeof Trigger> {
  isActive?: boolean
}

// const WrappedTrigger = forwardRef<HTMLDivElement, WrappedTriggerProps>(
function Tab({ children, isActive, ...props }: WrappedTriggerProps) {
  return (
    <Trigger {...props}>
      {children}
      {isActive && (
        <Highlight
          layoutId="highlight"
          transition={{
            ease: [0.4, 0, 0.2, 1],
            duration: 0.15,
          }}
        />
      )}
    </Trigger>
  )
}
// )

export const List = styled(RadixTabs.List, {
  display: 'flex',
  gap: '$md',
  borderBlockEnd: '1px solid $quaternary',
})

interface TabsProps {}

export function TabsExample({}: TabsProps) {
  type Value = { value: string; label: string; content?: ReactNode }

  const values: Value[] = [
    { value: '1', label: 'Image generation', content: 'Test' },
    { value: '2', label: 'Outpainting' },
    { value: '3', label: 'Inpainting' },
    { value: '4', label: 'Variations' },
  ]

  const [currentValue, setValue] = useState('1')

  return (
    <RadixTabs.Root value={currentValue} onValueChange={setValue}>
      <List css={{ marginBlockEnd: '$md' }}>
        {values.map(({ value, label }) => (
          <Tab key={value} value={value} isActive={value == currentValue}>
            {label}
          </Tab>
        ))}
      </List>
      {values.map(({ value, content }) => (
        <RadixTabs.Content key={value} value={value}>
          {content}
        </RadixTabs.Content>
      ))}
    </RadixTabs.Root>
  )
}
