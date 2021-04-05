import SEO from './SEO'

interface Props {
  children?: React.ReactNode
}

export default function Providers({ children }: Props) {
  return (
    <>
      <SEO />
      {children}
    </>
  )
}
