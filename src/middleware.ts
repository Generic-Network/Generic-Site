import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const redirects: Record<string, string> = {
    "/youtube": "https://youtube.com/@GenericNetworkDE",
    "/twitter": "https://twitter.com/genericnetworkd",
    "/x":"https://twitter.com/genericnetworkd",
    "/discord": "https://discord.gg/5tZpmCzvtX",
  };

  const destination = redirects[url.pathname];
  if (destination) {
    return NextResponse.redirect(destination, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"], // Middleware wird für alle Routen ausgeführt
};
