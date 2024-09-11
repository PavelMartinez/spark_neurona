import {clerkMiddleware} from '@clerk/nextjs/server'
import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

// Initialize the next-intl middleware
const intlMiddleware = createMiddleware(routing);

export default clerkMiddleware((_, req) => {
  return intlMiddleware(req)
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
    '/',
    '/(en|de|es|ja|tr|hi|zh|pt|it|ar|fr|id|ko|ru)/:path*'
  ],
}