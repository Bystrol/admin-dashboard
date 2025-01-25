'use client';

import { ReactNode } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { themeOptions } from '@/theme';
import { useUserStore } from '@/store/user-store';
import { plPL, enUS } from '@mui/material/locale';
import { useCurrentLocale } from '@/locales/client';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme } = useUserStore();
  const locale = useCurrentLocale();

  const muiLocale = locale === 'pl' ? plPL : enUS;

  const customTheme = createTheme(themeOptions[theme], muiLocale);

  return <MuiThemeProvider theme={customTheme}>{children}</MuiThemeProvider>;
};
