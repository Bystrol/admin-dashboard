import { ReactNode } from 'react';
import { ThemeProvider } from './theme';
import { I18nProvider } from './i18n';
import { ClerkProvider } from './clerk';
// import { ToasterProvider } from './toaster';

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <I18nProvider>
      <ClerkProvider>
        <ThemeProvider>
          {/* <ToasterProvider /> */}
          {children}
        </ThemeProvider>
      </ClerkProvider>
    </I18nProvider>
  );
};
