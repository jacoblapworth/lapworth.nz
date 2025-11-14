import { PauseIcon, PlayIcon } from 'lucide-react'
import {
  MediaActionTypes,
  MediaProvider,
  useMediaDispatch,
  useMediaFullscreenRef,
  useMediaRef,
  useMediaSelector,
} from 'media-chrome/react/media-store'
import { styled } from '@/styled/jsx'
import { PlayPauseIcon } from './play-pause-icon'

const Button = styled('button', {
  base: {
    _hover: {
      backgroundColor: 'surfaceHovered',
    },
    alignItems: 'center',
    backgroundColor: 'surface',
    borderRadius: 'max',
    color: 'tertiary',
    cursor: 'pointer',
    display: 'flex',
    height: '48px',
    justifyContent: 'center',
    width: '48px',
  },
})

// export function PlayButton() {
//   // Dispatch media state change requests using useMediaDispatch()
//   const dispatch = useMediaDispatch()
//   // Get the latest media state you care about in your component using useMediaSelector()
//   const mediaPaused = useMediaSelector((state) => state.mediaPaused)
//   const onClick = () => {
//     // Select from a set of well-defined actions for state change requests
//     // using MediaActionTypes
//     const type = mediaPaused
//       ? MediaActionTypes.MEDIA_PLAY_REQUEST
//       : MediaActionTypes.MEDIA_PAUSE_REQUEST
//     dispatch({ type })
//   }

//   return (
//     <Button onClick={onClick} type="button">
//       <PlayPauseIcon isPlaying={!mediaPaused} />
//       {/* {mediaPaused ? <PlayIcon /> : <PauseIcon />} */}
//     </Button>
//   )
// }

interface PlayButtonProps {
  isPlaying: boolean
  onClick: () => void
}

export function PlayButton({ isPlaying, onClick }: PlayButtonProps) {
  return (
    <Button onClick={onClick} type="button">
      <PlayPauseIcon isPlaying={isPlaying} />
    </Button>
  )
}
