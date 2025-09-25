import dynamic from 'next/dynamic'
import NextVideo from 'next-video'
import { use } from 'react'
import { styled } from '@/styled/jsx'

const StyledVideo = styled(NextVideo, {
  base: {
    borderRadius: 'md',
    marginBlockEnd: 'md',
    maxWidth: '100%',
  },
})

interface Prop {
  src: string
  captions: string
  poster: string
}

export function Video({ src, captions, poster }: Prop) {
  // const asset = dynamic(() =>
  //   import('@/videos/announcement.mp4').then((mod) => mod.default),
  // )

  // const asset = use(import('@/videos/announcement.mp4')).default
  // console.log(asset)
  return (
    <StyledVideo
      controls
      src={src}
      // height="240"
      // poster={poster}
      // preload="lazy"
      // width="600"
    >
      {/* <source src={src} type="video/mp4" /> */}
      {/* <track kind="captions" label="English" src={captions} srcLang="en" /> */}
      {/* Your browser does not support the video tag. */}
    </StyledVideo>
  )
}
