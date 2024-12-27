'use client';

import { I18nProviderClient, useCurrentLocale } from '@/locales/client';
import { ReactNode } from 'react';

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const locale = useCurrentLocale();

  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
};
