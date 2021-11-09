import { GetStaticProps } from './_app'

export default function Home() {
  return 'Coming soon'
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      title: 'Work',
    },
  }
}
