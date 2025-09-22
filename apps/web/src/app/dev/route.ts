import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  const store = await cookies()
  store.set('preview', 'true', {
    httpOnly: true,
    path: '/',
    sameSite: 'strict',
    secure: true,
  })

  return NextResponse.json({ isPreview: true })
}
