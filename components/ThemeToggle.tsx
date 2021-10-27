import { FC } from 'react'

import { useTheme } from 'next-themes'

import { styled } from '@/styles'

const useThemeValue = (lightValue: string, darkValue: string) => {
  const { theme } = useTheme()

  return theme === 'light' ? lightValue : darkValue
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
  const { setTheme } = useTheme()
  const themeToSet = useThemeValue('dark', 'light')
  const label = useThemeValue('🌚', '😎')

  const toggleTheme = () => {
    setTheme(themeToSet)
  }

  return <Button onClick={toggleTheme}>{label}</Button>
}

export default ThemeToggle
