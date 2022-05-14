import { NextPage } from 'next'

import Link from '@/components/Link'
import Text from '@/components/Text'
import { styled } from '@/styles'

import { GetStaticProps } from './_app'

const Page = styled('div', {
  maxWidth: '100vw',
  '@sm': {
    maxWidth: '75vw',
  },
})

export const Home: NextPage = () => {
  return (
    <Page>
      <Text size="xlarge" display>
        Kia ora 👋 Ko Jacob tōku ingoa
      </Text>
      <Text>
        <div>
          <Link href="https://instagram.com/jacoblapworth">@jacoblapworth</Link>
        </div>
        <div>
          <Link sameTab href="mailto:jacob@lapworth.nz">
            jacob@lapworth.nz
          </Link>
        </div>
      </Text>
      <Text size="xlarge" display>
        Tāmaki Makaurau, Aotearoa —&nbsp;Auckland, New Zealand
      </Text>
      <Text>-36.862600º, 174.741270º</Text>
      <Text size="xlarge" display serif>
        Scaling design systems at <Link href="https://xero.com">@Xero</Link>
      </Text>
    </Page>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}
