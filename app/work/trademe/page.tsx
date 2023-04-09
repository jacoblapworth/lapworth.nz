'use client'

import Discover from '@/components/Work/TradeMe/Discover'
import { darkTheme, styled } from '@/styles'

import { tradeMeTheme } from './theme'

const Theme = styled('div', {
  [darkTheme]: {
    [darkTheme.colors.background.variable]: 'magenta',
  },
})

export default function Page() {
  return (
    <>
      <div className={tradeMeTheme}>
        <Theme />
        <Discover />
      </div>
    </>
  )
}
