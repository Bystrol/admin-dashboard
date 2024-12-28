import { ReactNode } from 'react';
import { ThemeProvider } from './theme';
import { I18nProvider } from './i18n';
import { ClerkProvider } from './clerk';

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <I18nProvider>
      <ClerkProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </ClerkProvider>
    </I18nProvider>
  );
};
