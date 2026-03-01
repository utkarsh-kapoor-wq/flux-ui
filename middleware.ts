import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This runs on Vercel's Edge Network before hitting your application
export function middleware(request: NextRequest) {
  const secretKey = process.env.VERCEL_PROTECTION_BYPASS_TOKEN;
  
  // Example 1: Protecting specific API routes
  if (request.nextUrl.pathname.startsWith('/api/v3/emails')) {
    const authHeader = request.headers.get('authorization');
    // You can do preliminary checks here if needed, or leave it to your route handlers.
  }

  // Example 2: Hard-locking the entire Dashboard
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
      // Maybe you check for a specific cookie you manually give yourself
      const devCookie = request.cookies.get('admin_access_cookie');
      
      if (devCookie?.value !== secretKey) {
        return new NextResponse("Not Found", { status: 404 });
      }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
