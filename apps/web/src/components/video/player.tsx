'use client'

import {
  MediaControlBar,
  MediaController,
  MediaMuteButton,
  MediaVolumeRange,
} from 'media-chrome/react'
import type { PlayerProps } from 'next-video'
import { useCallback, useRef } from 'react'
import ReactPlayer from 'react-player'
import { css } from '@/styled/css'
import { PlayButton } from './play-button'

// const StyledVideo = styled(NextVideo, {
//   base: {
//     border: 'muted',
//     maxWidth: '2xl',
//     minWidth: 0,
//     width: '100%',
//   },
// })

export function Player(props: PlayerProps) {
  const { asset, src, poster, blurDataURL, thumbnailTime, ...rest } = props
  const ref = useRef<HTMLVideoElement>(null)

  // const mediaRef = useMediaRef()
  // const mediaStore = createMediaStore({
  //   media: mediaRef,
  // })

  const _setPlayerRef = useCallback((player: HTMLVideoElement) => {
    if (!player) return
    ref.current = player
    console.log({ player })
  }, [])

  return (
    // <MediaProvider mediaStore={mediaStore}>
    <MediaController
      style={{
        aspectRatio: '16/9',
        maxWidth: '800px',
        width: '100%',
      }}
    >
      <ReactPlayer
        className={css({
          height: 'auto',
          maxWidth: '800px',
          width: '100%',
        })}
        config={{
          mux: {
            attributes: { poster },
          },
        }}
        playsInline
        preload="auto"
        ref={ref}
        slot="media"
        src={src}
        style={{
          height: '100%',
          width: '100%',
        }}
        {...rest}
        controls={false}
      ></ReactPlayer>
      <PlayButton
        isPlaying={!ref.current?.paused}
        onClick={() => {
          if (ref.current) {
            if (ref.current.paused) {
              ref.current.play()
            } else {
              ref.current.pause()
            }
          }
        }}
      />
      {/* <MediaPlayButton /> */}
      <MediaControlBar>
        {/* <MediaSeekBackwardButton seekOffset={10} /> */}
        {/* <MediaSeekForwardButton seekOffset={10} /> */}
        {/* <MediaTimeRange /> */}
        {/* <MediaTimeDisplay showDuration /> */}
        <MediaMuteButton />
        <MediaVolumeRange />
        {/* <MediaPlaybackRateButton /> */}
        {/* <MediaFullscreenButton /> */}
      </MediaControlBar>
    </MediaController>
    // </MediaProvider>
  )
}
