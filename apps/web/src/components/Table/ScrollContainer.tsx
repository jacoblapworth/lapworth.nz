import { motion, useScroll, useTransform } from 'motion/react'
import { createContext, type ReactNode, useContext, useRef } from 'react'

import { css } from '@/styled/css'
import { VStack } from '@/styled/jsx'

export const TableScrollContext = createContext<ReturnType<
  typeof useScroll
> | null>(null)

interface TableContainerProps {
  children: ReactNode
}

export function TableScrollContainer({ children }: TableContainerProps) {
  const container = useRef<HTMLDivElement>(null)
  const scroll = useScroll({ container })
  const opacity = useTransform(scroll.scrollXProgress, (v) => (v < 1 ? 1 : 0))

  return (
    <VStack position={'relative'}>
      <VStack
        alignItems={'stretch'}
        flexGrow={1}
        overflowX={'scroll'}
        ref={container}
        width="100%"
      >
        <TableScrollContext.Provider value={scroll}>
          {children}
        </TableScrollContext.Provider>
      </VStack>
      <motion.span
        className={css({
          bottom: 0,
          boxShadow: 'overflow.right',
          position: 'absolute',
          right: -16,
          top: 0,
          width: 16,
        })}
        style={{ opacity }}
      />
    </VStack>
  )
}

export function useTableScroll() {
  const scroll = useContext(TableScrollContext)

  if (!scroll) {
    throw new Error('useTableScroll must be used within a TableContainer')
  }

  return scroll
}
