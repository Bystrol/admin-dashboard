import { getCurrentLocale } from '@/locales/server';
import { NextRequest, NextResponse } from 'next/server';

export async function attachLocaleToAuthRedirects(request: NextRequest) {
  const locale = await getCurrentLocale();

  let urlWithLocale = new URL(
    `/${locale}${process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}`,
    request.url
  );

  const signUpUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL;

  if (request.nextUrl.pathname === signUpUrl) {
    urlWithLocale = new URL(`/${locale}${signUpUrl}`, request.url);
  }

  return NextResponse.redirect(urlWithLocale);
}
