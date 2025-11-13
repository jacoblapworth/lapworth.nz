import NextVideo, { type PlayerProps } from 'next-video'
import { styled } from '@/styled/jsx'

const StyledVideo = styled(NextVideo, {
  base: {
    border: 'muted',
    maxWidth: '2xl',
    width: '100%',
  },
})

type Props = PlayerProps & {
  video: string
}

export async function Video({ video, ...props }: Props) {
  const { default: src } = await import(`@/videos/${video}`)
  return <StyledVideo controls preload="lazy" src={src} {...props} />
}
