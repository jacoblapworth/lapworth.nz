import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(
    { isPreview: true },
    { headers: { 'Set-Cookie': 'preview=true' } },
  )
}
