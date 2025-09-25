import { MDXRemote as NextMDXRemote } from 'next-mdx-remote-client/rsc'
import { Suspense } from 'react'
import { components } from './mdx'

// import { ErrorComponent, LoadingComponent } from '../components'

interface Props {
  mdx: string
}
export async function MDXRemote({ mdx }: Props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NextMDXRemote
        components={components}
        source={mdx}
        // onError={ErrorComponent}
      />
    </Suspense>
  )
}
