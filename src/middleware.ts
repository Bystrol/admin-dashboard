import { clerkMiddleware } from '@clerk/nextjs/server';
import { createRouteMatcher } from '@clerk/nextjs/server';
import withI18nMiddleware from './middlewares/with-i18n';

const isPublicRoute = createRouteMatcher(['/:locale/sign-in(.*)', '/:locale/sign-up(.*)']);

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect();
  }

  return withI18nMiddleware(request);
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
