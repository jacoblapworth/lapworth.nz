'use client'

import { FC, ReactElement, ReactNode, useState } from 'react'

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

interface StitchesRegistryProps {
  children: ReactNode
}

export function StitchesRegistry({ children }: StitchesRegistryProps) {
  const [isRendered, setIsRendered] = useState(false)
  console.log({ isRendered, children })
  useServerInsertedHTML(() => {
    if (!isRendered) {
      globalStyles()
      setIsRendered(true)

      const css = getCssText()
      console.log({ isRendered, css, children })
      return <style id="stitches" dangerouslySetInnerHTML={{ __html: css }} />
    }
  })

  return <>{children}</>
}
