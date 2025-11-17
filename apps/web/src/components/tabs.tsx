'use client'

import * as Ariakit from '@ariakit/react'
import { motion } from 'motion/react'
import { type ComponentProps, type ReactNode, useState } from 'react'

import { styled } from '@/styled/jsx'

export const Trigger = styled(Ariakit.Tab, {
  base: {
    _active: {
      color: 'interactive',
    },
    all: 'unset',
    color: 'tertiary',
    cursor: 'pointer',
    paddingBlock: 'sm',
    position: 'relative',
  },
})

const HighlightElement = styled('div', {
  base: {
    backgroundColor: 'interactive',
    bottom: -1,
    height: '2px',
    position: 'absolute',
    width: '100%',
  },
})

const Highlight = motion.create(HighlightElement)

interface WrappedTriggerProps extends ComponentProps<typeof Trigger> {
  isActive?: boolean
}

function Tab({ children, isActive, ...props }: WrappedTriggerProps) {
  return (
    <Trigger {...props}>
      {children}
      {isActive && (
        <Highlight
          layoutId="highlight"
          transition={{
            duration: 0.15,
            ease: [0.4, 0, 0.2, 1],
          }}
        />
      )}
    </Trigger>
  )
}
// )

export const TabList = styled(Ariakit.TabList, {
  base: {
    borderBlockEnd: 'muted',
    display: 'flex',
    gap: 'md',
    marginBlockEnd: 'md',
  },
})

export function TabsExample() {
  interface Value {
    value: string
    label: string
    content?: ReactNode
  }

  const values: Value[] = [
    { content: 'Test', label: 'Image generation', value: '1' },
    { label: 'Outpainting', value: '2' },
    { label: 'Inpainting', value: '3' },
    { label: 'Variations', value: '4' },
  ]

  const [selectedId, setSelectedId] = useState<string | null | undefined>(
    values[0].value,
  )

  return (
    <Ariakit.TabProvider selectedId={selectedId} setSelectedId={setSelectedId}>
      <TabList>
        {values.map(({ value, label }) => (
          <Tab isActive={value === selectedId} key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabList>
      {values.map(({ value, content }) => (
        <Ariakit.TabPanel key={value} tabId={value}>
          {content}
        </Ariakit.TabPanel>
      ))}
    </Ariakit.TabProvider>
  )
}
