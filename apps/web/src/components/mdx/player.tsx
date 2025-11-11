'use client'

import { PauseIcon, PlayIcon } from 'lucide-react'
import createMediaStore from 'media-chrome/dist/media-store/media-store.js'
import {
  MediaControlBar,
  MediaController,
  MediaFullscreenButton,
  MediaMuteButton,
  MediaPlayButton,
  MediaPlaybackRateButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaTimeDisplay,
  MediaTimeRange,
  MediaVolumeRange,
} from 'media-chrome/react'
import {
  MediaActionTypes,
  MediaProvider,
  useMediaDispatch,
  useMediaFullscreenRef,
  useMediaRef,
  useMediaSelector,
} from 'media-chrome/react/media-store'
import type { PlayerProps } from 'next-video'
import { useCallback, useRef } from 'react'
import ReactPlayer from 'react-player'
import { css } from '@/styled/css'
import { styled } from '@/styled/jsx'
import { PlayButton } from '../video/play-button'

export function Player(props: PlayerProps) {
  console.log({ props })
  const { asset, src, poster, blurDataURL, thumbnailTime, ...rest } = props
  const ref = useRef<HTMLVideoElement>(null)

  // const mediaRef = useMediaRef()
  // const mediaStore = createMediaStore({
  //   media: mediaRef,
  // })

  const setPlayerRef = useCallback((player: HTMLVideoElement) => {
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
        ref={setPlayerRef}
        slot="media"
        src={src}
        style={{
          height: '100%',
          width: '100%',
        }}
        {...rest}
        controls={false}
      ></ReactPlayer>
      {/* <PlayButton /> */}
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
