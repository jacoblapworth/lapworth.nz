import NextVideo, { type PlayerProps } from 'next-video'

type Props = PlayerProps & {
  video: string
}

export async function Video({ video, ...props }: Props) {
  const { default: src } = await import(`@/videos/${video}`)
  return <NextVideo src={src} {...props} />
}
