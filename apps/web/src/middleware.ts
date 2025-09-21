import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { devmode } from './flags'

export const config = {
  matcher: '/work/:path*',
}

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/work/coming-soon')) {
    return
  }

  if (await devmode()) {
    return
  }

  const isPreview =
    request.cookies.get('preview')?.value === 'true' ||
    request.nextUrl.searchParams.get('preview') === 'true'

  if (isPreview) {
    return
  }

  return NextResponse.redirect(new URL(`/work/coming-soon`, request.url))
}
