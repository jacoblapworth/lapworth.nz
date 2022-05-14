import { NextPage } from 'next'

import Text from '@/components/Text'
import { Experience } from '@/components/Work/Experience'

import { GetStaticProps } from './_app'

export const Work: NextPage = () => {
  return (
    <>
      <Text size="xlarge" display>
        Coming soon 👀
      </Text>
      <Experience />
    </>
  )
}

export default Work

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      title: 'Work',
    },
  }
}
