import { styled } from '@/styled/jsx'

const StyledVideo = styled('video', {
  base: {
    border: 'muted',
    maxWidth: '100%',
  },
})

interface Prop {
  src: string
  captions: string
  poster: string
}

export function Video({ src, captions, poster }: Prop) {
  return (
    <StyledVideo controls poster={poster} preload="none" width="600">
      <source src={src} type="video/mp4" />
      <track kind="captions" label="English" src={captions} srcLang="en" />
      Your browser does not support the video tag.
    </StyledVideo>
  )
}
