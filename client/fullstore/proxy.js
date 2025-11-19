import { NextResponse } from "next/server";
import toast from "react-hot-toast";

// This function can be marked `async` if using `await` inside
export function proxy(request) {
     const { pathname } = request.nextUrl;
     const tokenADM = request.cookies.get("token_ADM");
     const tokenUSER = request.cookies.get("token_USER");

     // 🔐 Protege rotas do ADMIN
     if (pathname.startsWith("/admin")) {
        if (!tokenADM) {
           return NextResponse.redirect(new URL("/login", request.url));
        }
     }

     // 🔐 Protege rotas do USER
     if (pathname.startsWith("/user")) {
        if (!tokenUSER && !tokenADM) {
           return NextResponse.redirect(new URL("/login", request.url));
        }
     }

     return NextResponse.next();
  
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/admin/:path*", "/user/:path*"]
};
