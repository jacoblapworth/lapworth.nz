import { FC, useEffect, useState } from 'react'

import { useTheme } from 'next-themes'

import { styled } from '@/styles'

const useThemeValue = (lightValue: string, darkValue: string) => {
  const { resolvedTheme } = useTheme()

  return resolvedTheme === 'light' ? lightValue : darkValue
}

interface ThemeToggleProps {}

const Button = styled('button', {
  fontSize: '$lg',
  border: '1px solid transparent',
  borderRadius: 9999,
  backgroundColor: '$surface',
  textAlign: 'center',
  lineHeight: 1,
  cursor: 'pointer',
  padding: '$sm',

  '&:hover': {
    border: '1px solid $divider',
  },
})

const ThemeToggle: FC<ThemeToggleProps> = ({}) => {
  const [mounted, setMounted] = useState(false)
  const { setTheme } = useTheme()
  const themeToSet = useThemeValue('dark', 'light')
  const label = useThemeValue('🌚', '😎')

  const toggleTheme = () => {
    setTheme(themeToSet)
  }

  useEffect(() => setMounted(true), [])

  return <Button onClick={toggleTheme}>{mounted ? label : ''}</Button>
}

export default ThemeToggle
