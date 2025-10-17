import { renderToBuffer } from '@react-pdf/renderer'
import { NextResponse } from 'next/server'
import { CVDocument } from '../pdf'

export async function GET() {
  const buffer = await renderToBuffer(<CVDocument />)
  return new NextResponse(Buffer.from(buffer), {
    headers: {
      'Cache-Control': 'no-store',
      'Content-Disposition': 'attachment; filename="jacob-lapworth_cv.pdf"',
      'Content-Type': 'application/pdf',
    },
  })
}
