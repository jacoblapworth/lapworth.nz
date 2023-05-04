import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = {
  matcher: '/work/:path*',
}

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/work/coming-soon')) {
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
