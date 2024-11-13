import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define route groups for cleaner management
const PUBLIC_ROUTES = ["/login", "/register"];
const PROTECTED_ROUTES = [
  "/",
  "/alerts",
  "/sanctions",
  "/transactions",
  "/customers",
  "/reports",
  "/settings",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuthenticatedUser = request.cookies.has("userAuth");
  
  // Security headers
  const headers = new Headers(request.headers);
  const response = NextResponse.next();
  
  // Add security headers
  const securityHeaders = {
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": 
      "camera=(), microphone=(), geolocation=(), interest-cohort=()",
    "X-XSS-Protection": "1; mode=block",
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
  };

  // Apply security headers to all responses
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  try {
    // Check for session timeout if user is authenticated
    if (isAuthenticatedUser) {
      const authCookie = request.cookies.get("userAuth");
      if (authCookie?.value) {
        try {
          // Add your session timeout logic here
          // For example, checking JWT expiration or last activity timestamp
          // if (isSessionExpired(authCookie.value)) {
          //   return redirectToLogin(request);
          // }
        } catch (error) {
          console.error("Session validation error:", error);
          return redirectToLogin(request);
        }
      }
    }

    // Redirect authenticated users away from public routes
    if (isAuthenticatedUser && PUBLIC_ROUTES.includes(pathname)) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    // Redirect unauthenticated users to login
    if (!isAuthenticatedUser && PROTECTED_ROUTES.includes(pathname)) {
      return redirectToLogin(request, pathname);
    }

    return response;
  } catch (error) {
    console.error("Middleware error:", error);
    return redirectToLogin(request);
  }
}

// Helper function to handle login redirections
function redirectToLogin(request: NextRequest, returnTo?: string) {
  const loginUrl = new URL("/login", request.url);
  if (returnTo) {
    loginUrl.searchParams.set("returnTo", returnTo);
  }
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
};