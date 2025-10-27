'use server'

import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import type { StaticImageData } from 'next/image'
import { getImageMetadata } from 'velite'

export async function getMetadata(
  src: string | StaticImport,
): Promise<StaticImageData> {
  if (typeof src !== 'string') {
    return src as StaticImageData
  }
  const location = join(process.cwd(), 'public', src)
  const buffer = await readFile(location)
  const metadata = await getImageMetadata(buffer)
  if (metadata == null) {
    throw new Error(`Failed to get image metadata: ${location}`)
  }
  return {
    ...metadata,
    src,
  }
}
