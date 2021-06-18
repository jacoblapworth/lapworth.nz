import SEO from './SEO'
import { ThemeProvider } from './ThemeColor'

interface Props {
  children?: React.ReactNode
}

export default function Providers({ children }: Props) {
  return (
    <>
      <ThemeProvider>
        <SEO />
        {children}
      </ThemeProvider>
    </>
  )
}
