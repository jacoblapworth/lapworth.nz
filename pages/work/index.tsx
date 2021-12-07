import { GetStaticProps } from './_app'
import Text from '@/components/Text'
import { Experience } from '@/components/Work/Experience'
import Glass from '@/components/Work/Glass'

export default function Home() {
  return (
    <div>
      <Text size="xlarge" display>
        Coming soon 👀
      </Text>
      <Experience />
      <Glass />
    </div>
  )
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      title: 'Work',
    },
  }
}
