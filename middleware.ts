import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Middleware to block old WordPress paths and protect the site
 * This runs at the edge before requests reach the Next.js router
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Block old WordPress paths - redirect to 404
  const blockedPaths = [
    '/wp-content/',
    '/wp-includes/',
    '/wp-admin/',
    '/wp-json/',
    '/xmlrpc.php',
    '/wp-login.php',
    '/wp-signup.php',
    '/wp-config.php',
    '/wp-trackback.php',
    '/wp-cron.php',
    '/wp-load.php',
    '/wp-mail.php',
    '/wp-settings.php',
    '/wp-blog-header.php',
  ]

  // Check if the current path starts with any blocked path
  const isBlockedPath = blockedPaths.some(blockedPath =>
    pathname.startsWith(blockedPath)
  )

  if (isBlockedPath) {
    // Redirect to 404 page
    return NextResponse.redirect(new URL('/404', request.url), 301)
  }

  // Allow all other requests to proceed
  return NextResponse.next()
}

/**
 * Configure which paths the middleware should run on
 * We want to check all paths except static files and API routes
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, fonts, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|woff|woff2)$).*)',
  ],
}
