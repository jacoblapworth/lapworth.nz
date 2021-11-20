import Text from '@/components/Text'
import { Experience } from '@/components/Work/Experience'

import { GetStaticProps } from './_app'

export default function Home() {
  return (
    <>
      <Text size="xlarge" display>
        Coming soon 👀
      </Text>
      <Experience />
    </>
  )
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      title: 'Work',
    },
  }
}
