import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { devmode } from './flags'

async function shouldRedirectWorkComingSoon(
  request: NextRequest,
): Promise<boolean> {
  // Work section is now always accessible
  if (request.nextUrl.pathname.startsWith('/work/coming-soon')) {
    return false
  }

  if (!request.nextUrl.pathname.startsWith('/work')) {
    return false
  }

  if (await devmode()) {
    return false
  }

  return false // Work is always enabled, no redirect needed
}

export const config = {
  matcher: '/work/:path*',
  runtime: 'nodejs',
}

export async function middleware(request: NextRequest) {
  if (await shouldRedirectWorkComingSoon(request)) {
    return NextResponse.redirect(new URL(`/work/coming-soon`, request.url))
  }

  return NextResponse.next()
}
