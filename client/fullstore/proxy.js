import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function proxy(request) {
    if (!request.cookies.get("token")) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/admin/:path*"],
};
