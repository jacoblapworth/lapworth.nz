import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'

interface ThemeContext {
  color: string
  setColor: Dispatch<SetStateAction<string>>
  randomColor: () => void
}

const ThemeContext = createContext<ThemeContext>(null)

interface ThemeProviderProps {
  children: ReactNode
}

const colors = ['#917373', '#dabdc0', '#daf1e4', '#427658']

const BgProvider = ({ children }: ThemeProviderProps) => {
  const [color, setColor] = useState('#ffffff')

  const randomColor = () => {
    const color = colors[Math.floor(Math.random() * colors.length)]
    setColor(color)
  }

  const value = { color, setColor, randomColor }
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

const useTheme = () => useContext(ThemeContext)

export { BgProvider, useTheme }
