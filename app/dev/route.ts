import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json(
    { isPreview: true },
    { headers: { 'Set-Cookie': 'preview=true' } },
  )
}
