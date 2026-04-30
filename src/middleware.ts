import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {

    const jwtToken = request.cookies.get("jwtToken");
    const token = jwtToken?.value as string;

    if (!token) {
        if (request.nextUrl.pathname.startsWith("/api/users/profile/") ||
            request.nextUrl.pathname.startsWith("/api/auth/")) {
            return NextResponse.json(
                { message: 'no token provided, access denied' },
                { status: 401 } // Unauthorized
            );
        }
    } else {
        if (
            request.nextUrl.pathname === "/login" ||
            request.nextUrl.pathname === "/register"
        ) {
            return NextResponse.redirect(new URL("/", request.url));
        }
    }
}

export const config = {
    matcher: ["/api/users/profile/:path*", "/api/auth/:path*", "/login", "/register"]
}
