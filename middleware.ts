// Authentication middleware disabled - all routes are accessible
import { NextRequest, NextResponse } from "next/server";

// Simple middleware that allows all requests to pass through
export default function middleware(request: NextRequest) {
  // No authentication required - allow all requests
  return NextResponse.next();
}

// Apply middleware to all routes except static assets
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
