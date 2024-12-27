'use client';

import { enUS, plPL } from '@clerk/localizations';
import { ReactNode } from 'react';
import { ClerkProvider as Provider } from '@clerk/nextjs';
import { useCurrentLocale } from '@/locales/client';
import { dark } from '@clerk/themes';
import { useUserStore } from '@/store/user-store';

export const ClerkProvider = ({ children }: { children: ReactNode }) => {
  const locale = useCurrentLocale();
  const localization = locale === 'en' ? enUS : plPL;

  const { theme } = useUserStore();

  const providerTheme: Record<typeof theme, typeof dark | undefined> = {
    light: undefined,
    dark,
  };

  return (
    <Provider
      appearance={{
        baseTheme: providerTheme[theme],
      }}
      localization={localization}
    >
      {children}
    </Provider>
  );
};
