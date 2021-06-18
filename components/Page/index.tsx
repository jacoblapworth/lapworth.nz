import Header from '@components/Header'
import { useTheme } from '@components/Providers/ThemeColor'
import CN from 'classnames'
import { NextSeo } from 'next-seo'
import { CSSProperties } from 'react'

interface Props {
  hideNav?: boolean
  children?: React.ReactNode
}

const pageStyle: CSSProperties = {
  marginBottom: 'env(safe-area-inset-bottom)',
}

const Page = ({
  hideNav,
  className,
  children,
  ...rest
}: Props & React.HTMLAttributes<HTMLDivElement>) => {
  const { color } = useTheme()
  return (
    <>
      <NextSeo
        additionalMetaTags={[
          {
            name: 'theme-color',
            content: color,
          },
        ]}
      />

      {!hideNav && <Header />}

      <main className={CN('pt-12', className)} style={pageStyle} {...rest}>
        {children}
      </main>

      <style jsx global>{`
        body {
          background: ${color};
        }
      `}</style>
    </>
  )
}

export default Page
