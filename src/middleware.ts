import { NextRequest, NextResponse } from 'next/server'

// === Social Links: /twitter, /github, /linkedin ===
const socialLinks: Record<string, string> = {
  twitter: 'https://twitter.com/dein_handle',
  github: 'https://github.com/dein_username',
  linkedin: 'https://linkedin.com/in/dein_profil',
}

// === Dev Links: /dev/youtube, /dev/docs ===
const devLinks: Record<string, string> = {
  youtube: 'https://youtube.com/@dein_kanal',
  docs: 'https://devsite.com/docs',
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const segments = pathname.split('/').filter(Boolean)

  // Beispiel: /twitter
  if (segments.length === 1 && socialLinks[segments[0]]) {
    return NextResponse.redirect(socialLinks[segments[0]])
  }

  // Beispiel: /dev/youtube
  if (segments.length === 2 && segments[0] === 'dev' && devLinks[segments[1]]) {
    return NextResponse.redirect(devLinks[segments[1]])
  }

  return NextResponse.next()
}

// ✅ Nur auf relevante Routen anwenden
export const config = {
  matcher: [
    '/twitter',
    '/github',
    '/linkedin',
    '/dev/:path*',
  ],
}
