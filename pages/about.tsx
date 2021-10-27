import { GetStaticProps } from 'next'

export default function Home() {
  return <div>Kia ora 👋 Ko Jacob tōku ingoa</div>
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'About',
    },
  }
}
