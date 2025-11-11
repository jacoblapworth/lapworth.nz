import NextVideo, { type PlayerProps } from 'next-video'
import { Player } from './player'

type Props = PlayerProps & {
  video: string
}

export async function Video({ video, ...props }: Props) {
  const { default: src } = await import(`@/videos/${video}`)
  return <NextVideo as={Player} src={src} {...props} />
}
