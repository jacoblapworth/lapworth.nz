'use client'

import React, { FC, ReactElement } from 'react'

import { useServerInsertedHTML } from 'next/navigation'

import { getCssText, globalStyles } from '@/styles'

interface Props {
  children: ReactElement
}

export const ServerStylesheet: FC<Props> = ({ children }) => {
  globalStyles()
  useServerInsertedHTML(() => {
    return (
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
    )
  })

  return children
}
