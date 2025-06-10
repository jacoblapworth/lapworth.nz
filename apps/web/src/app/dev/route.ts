import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  const store = await cookies()
  store.set('preview', 'true', {
    path: '/',
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  })

  return NextResponse.json({ isPreview: true })
}
