import { FC } from 'react'

import { useTheme } from 'next-themes'

interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = ({}) => {
  const { theme, setTheme } = useTheme()
  return (
    <div>
      <button
        onClick={() =>
          theme === 'dark' ? setTheme('light') : setTheme('dark')
        }
      >
        Toggle Theme
      </button>
    </div>
  )
}

export default ThemeToggle
