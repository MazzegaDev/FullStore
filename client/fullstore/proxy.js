import { NextResponse } from "next/server";
import toast from "react-hot-toast";

// This function can be marked `async` if using `await` inside
export function proxy(request) {
    if (!request.cookies.get("token_ADM")) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/admin/:path*"],
};
