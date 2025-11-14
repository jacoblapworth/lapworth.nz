import NextVideo, { type PlayerProps } from 'next-video'
import { styled } from '@/styled/jsx'
import { Player } from './player'

const StyledVideo = styled(NextVideo, {
  base: {
    border: 'muted',
    maxWidth: '2xl',
    minWidth: 0,
    width: '100%',
  },
})

type Props = PlayerProps & {
  video: string
}

export async function Video({ video, ...props }: Props) {
  const { default: src } = await import(`@/videos/${video}`)
  return <NextVideo as={Player} src={src} {...props} />
}
