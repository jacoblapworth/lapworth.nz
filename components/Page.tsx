import { NextSeo } from 'next-seo'

import Header from '@/components/Header'
import { useTheme } from '@/components/Providers/BgColor'
import { styled, theme } from '@/styles'

interface Props {
  hideNav?: boolean
  children?: React.ReactNode
}

const Main = styled('main', {
  paddingBlockStart: 56,
  marginBottom: 'env(safe-area-inset-bottom)',
  marginInline: 16,
})

const Page = ({
  hideNav,
  className,
  title,
  children,
  ...rest
}: Props & React.HTMLAttributes<HTMLDivElement>) => {
  const { color } = useTheme()
  return (
    <>
      <NextSeo
        title={title}
        additionalMetaTags={[
          {
            name: 'theme-color',
            content: color,
          },
        ]}
      />

      {!hideNav && <Header />}

      <Main {...rest}>{children}</Main>

      <style jsx global>{`
        body {
          background: ${theme.colors.background};
        }
      `}</style>
    </>
  )
}

export default Page
