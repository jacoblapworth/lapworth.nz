import NextVideo from 'next-video'
import { styled } from '@/styled/jsx'

const StyledVideo = styled(NextVideo, {
  base: {
    border: 'muted',
    maxWidth: '100%',
  },
})

interface Prop {
  video: string
  captions: string
  poster: string
}

export async function Video({ video, captions, poster }: Prop) {
  const { default: src } = await import(`@/videos/${video}`)
  return <StyledVideo controls preload="lazy" src={src}></StyledVideo>
}
