import { MDXRemote as NextMDXRemote } from 'next-mdx-remote-client/rsc'
import { Suspense } from 'react'
import { components as sharedComponents } from './mdx'

// import { ErrorComponent, LoadingComponent } from '../components'

interface Props {
  mdx: string
  components?: Record<string, React.ComponentType>
}
export async function MDXRemote({ mdx, components }: Props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NextMDXRemote
        components={{ ...sharedComponents, ...components }}
        source={mdx}
        // onError={ErrorComponent}
      />
    </Suspense>
  )
}
