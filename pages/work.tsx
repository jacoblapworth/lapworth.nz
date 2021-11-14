import Text from '@/components/Text'

import { GetStaticProps } from './_app'

export default function Home() {
  return (
    <Text size="xlarge" display>
      Coming soon 👀
    </Text>
  )
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      title: 'Work',
    },
  }
}
