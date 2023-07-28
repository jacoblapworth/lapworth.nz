'use client'

import { motion, useCycle } from 'framer-motion'
import { useTheme } from 'next-themes'

import { styled } from '@/styled-system/jsx'

const useThemeValue = <T, U>(lightValue: T, darkValue: U): T | U => {
  const { resolvedTheme } = useTheme()
  return resolvedTheme === 'light' ? lightValue : darkValue
}

const Icon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    role="presentation"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.07151 5.07098C8.97675 1.16573 15.3084 1.16573 19.2136 5.07098C23.1189 8.97622 23.1189 15.3079 19.2136 19.2131C15.3084 23.1184 8.97675 23.1184 5.07151 19.2131C1.16627 15.3079 1.16627 8.97622 5.07151 5.07098ZM6.48572 17.7989L17.7994 6.48519C14.6752 3.361 9.60992 3.361 6.48572 6.48519C3.36153 9.60938 3.36153 14.6747 6.48572 17.7989Z"
    />
  </svg>
)

const Button = styled(motion.button, {
  base: {
    fontSize: 'lg',
    border: '1px solid transparent',
    borderRadius: 9999,
    backgroundColor: 'surface',
    textAlign: 'center',
    cursor: 'pointer',
    padding: 'sm',
    _hover: {
      border: 'divider',
    },
  },
})

export const ThemeToggle = () => {
  const { setTheme } = useTheme()
  const themeToSet = useThemeValue('dark', 'light')
  const [rotation, cycleRotation] = useCycle(0, 180)

  const toggleTheme = () => {
    setTheme(themeToSet)
    cycleRotation()
  }

  return (
    <Button
      onClick={toggleTheme}
      aria-label={`Change to ${themeToSet} theme`}
      data-testid="theme-toggle"
      animate={{
        rotate: rotation,
        transition: {
          duration: 0.2,
        },
      }}
      whileHover={{
        rotate: rotation + 15,
        transition: {
          duration: 0.1,
        },
      }}
    >
      <Icon />
    </Button>
  )
}
