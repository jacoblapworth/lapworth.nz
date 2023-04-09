'use client'

import { ReactNode, useState } from 'react'

import { useServerInsertedHTML } from 'next/navigation'

import { getCssText, globalStyles } from '@/styles'

interface StitchesRegistryProps {
  children: ReactNode
}

export function StitchesRegistry({ children }: StitchesRegistryProps) {
  const [isRendered, setIsRendered] = useState(false)
  useServerInsertedHTML(() => {
    if (isRendered) return
    globalStyles()
    setIsRendered(true)
    const css = getCssText()
    return <style id="stitches" dangerouslySetInnerHTML={{ __html: css }} />
  })

  return <>{children}</>
}
