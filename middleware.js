import { NextResponse } from "next/server";

let locales = ['fa', 'en']

function getLocale(request) {
    let defaultLocale = 'en'

    const localeCookie = request.cookies.get("locale")
    if (localeCookie){
        defaultLocale = localeCookie.value
    }
    return defaultLocale;
}

export function middleware(request) {

    const { pathname } = request.nextUrl
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`

    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        '/((?!_next).*)',
    ],
}