'use client';

import { I18nProviderClient } from '@/locales/client';
import { ClerkProvider } from '@clerk/nextjs';
import { ReactNode, use } from 'react';
import { enUS, plPL } from '@clerk/localizations';

export default function SubLayout({
  params,
  children,
}: {
  params: Promise<{ locale: string }>;
  children: ReactNode;
}) {
  const { locale } = use(params);
  const localization = locale === 'en' ? enUS : plPL;

  return (
    <I18nProviderClient locale={locale}>
      <ClerkProvider localization={localization}>{children}</ClerkProvider>
    </I18nProviderClient>
  );
}
