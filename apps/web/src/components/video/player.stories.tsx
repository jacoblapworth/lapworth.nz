import preview from '@/storybook/preview'
import { Player as Component } from './player'

const meta = preview.meta({
  component: Component,
  title: 'Components/Video/Player',
})

export const Player = meta.story({
  args: {
    asset: {
      blurDataURL:
        'data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAADwAQCdASoQAAkAAQAcJbACdAELZHLtWcAA/vKmbJ/6g4pXN/Z1WocCpnpTW6pAE1LYj++phcG0EyPHbmpCH/+2iH02mJVBLf/uC8Lf/d5+rpM5iw9hTBf/3PcquIAA',
      createdAt: 1761655340662,
      originalFilePath: 'src/videos/announcement.mp4',
      poster:
        'https://image.mux.com/BcL3xGpM7VbR2BkxmYQW02UVPF55uHarQVUz01SFypk5A/thumbnail.webp',
      provider: 'mux',
      providerMetadata: {
        mux: {
          assetId: '5X1J43c4IM3Bvu3daMMzERl01P00k76EMlA2zPmFJExCo',
          playbackId: 'BcL3xGpM7VbR2BkxmYQW02UVPF55uHarQVUz01SFypk5A',
          uploadId: 'RyFzQGNc00Hby11HKztzo02BPFdjg00VWRazcGkBvcBfUQ',
        },
      },
      size: 3995041,
      sources: [
        {
          src: 'https://stream.mux.com/BcL3xGpM7VbR2BkxmYQW02UVPF55uHarQVUz01SFypk5A.m3u8',
          type: 'application/x-mpegURL',
        },
      ],
      status: 'ready',
      updatedAt: 1761656664303,
    },
    blurDataURL:
      'data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAADwAQCdASoQAAkAAQAcJbACdAELZHLtWcAA/vKmbJ/6g4pXN/Z1WocCpnpTW6pAE1LYj++phcG0EyPHbmpCH/+2iH02mJVBLf/uC8Lf/d5+rpM5iw9hTBf/3PcquIAA',
    controls: true,
    poster:
      'https://image.mux.com/BcL3xGpM7VbR2BkxmYQW02UVPF55uHarQVUz01SFypk5A/thumbnail.webp',
    src: 'https://stream.mux.com/BcL3xGpM7VbR2BkxmYQW02UVPF55uHarQVUz01SFypk5A.m3u8',
  },
})
