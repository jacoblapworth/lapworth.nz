import { cacheLife } from 'next/cache'
import type { StaticImageData } from 'next/image'
import { getPlaiceholder } from 'plaiceholder'

export async function getImgBuffer(src: string): Promise<Buffer> {
  const response = await fetch(src, {
    cache: 'force-cache',
    next: {
      revalidate: 60 * 60 * 24 * 7, // 1 week
    },
  })

  if (!response.ok) {
    throw new Error(
      `Failed to fetch image: ${response.status} ${response.statusText}`,
    )
  }

  return Buffer.from(await response.arrayBuffer())
}

export async function getImageMetadata(src: string): Promise<StaticImageData> {
  'use cache'
  cacheLife('max')
  const buffer = await getImgBuffer(src)
  const { metadata, base64 } = await getPlaiceholder(buffer)

  return {
    blurDataURL: base64,
    height: metadata.height,
    src,
    width: metadata.width,
  }
}
