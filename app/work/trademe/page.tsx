'use client'

import { darkTheme, styled } from '@/styles'

import Discover from './Discover'
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
