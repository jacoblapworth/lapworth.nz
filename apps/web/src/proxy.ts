import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { devmode, showWork } from './flags'

async function shouldRedirectWorkComingSoon(
  request: NextRequest,
): Promise<boolean> {
  if (await showWork()) {
    return false
  }

  if (request.nextUrl.pathname.startsWith('/work/coming-soon')) {
    return false
  }

  if (!request.nextUrl.pathname.startsWith('/work')) {
    return false
  }

  if (await devmode()) {
    return false
  }

  return true
}

export const config = {
  matcher: '/work/:path*',
}

export async function proxy(request: NextRequest) {
  if (await shouldRedirectWorkComingSoon(request)) {
    return NextResponse.redirect(new URL(`/work/coming-soon`, request.url))
  }

  return NextResponse.next()
}
