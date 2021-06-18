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
}

const ThemeContext = createContext<ThemeContext>(null)

interface ThemeProviderProps {
  children: ReactNode
}

// #dabdc0
const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [color, setColor] = useState('#ffffff')
  const value = { color, setColor }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

const useTheme = () => useContext(ThemeContext)

export { ThemeProvider, useTheme }
