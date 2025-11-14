import NextVideo, { type PlayerProps } from 'next-video'
import { styled } from '@/styled/jsx'

const Player = styled(NextVideo, {
  base: {
    maxWidth: '2xl',
    minWidth: 0,
    overflow: 'hidden',
  },
})

type Props = PlayerProps & {
  video: string
}

export async function Video({ video, ...props }: Props) {
  const { default: src } = await import(`@/videos/${video}`)
  return <Player src={src} {...props} />
}
