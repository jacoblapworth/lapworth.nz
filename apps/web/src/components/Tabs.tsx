'use client'

import * as Ariakit from '@ariakit/react'
import { motion } from 'framer-motion'
import { type ComponentProps, type ReactNode, useState } from 'react'

import { styled } from '@/styled/jsx'

export const Trigger = styled(Ariakit.Tab, {
  base: {
    all: 'unset',
    cursor: 'pointer',
    paddingBlock: 'sm',
    color: 'tertiary',
    _active: {
      color: 'interactive',
    },
    position: 'relative',
  },
})

const HighlightElement = styled('div', {
  base: {
    backgroundColor: 'interactive',
    height: 1,
    width: '100%',
    position: 'absolute',
    bottom: -1,
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
            ease: [0.4, 0, 0.2, 1],
            duration: 0.15,
          }}
        />
      )}
    </Trigger>
  )
}
// )

export const TabList = styled(Ariakit.TabList, {
  base: {
    display: 'flex',
    gap: 'md',
    borderBlockEnd: '1px solid token(colors.quaternary)',
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
    { value: '1', label: 'Image generation', content: 'Test' },
    { value: '2', label: 'Outpainting' },
    { value: '3', label: 'Inpainting' },
    { value: '4', label: 'Variations' },
  ]

  const [selectedId, setSelectedId] = useState<string | null | undefined>(
    values[0].value,
  )

  return (
    <Ariakit.TabProvider selectedId={selectedId} setSelectedId={setSelectedId}>
      <TabList>
        {values.map(({ value, label }) => (
          <Tab key={value} value={value} isActive={value === selectedId}>
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
