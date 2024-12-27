'use client';

import { ReactNode } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { themeOptions } from '@/theme';
import { useUserStore } from '@/store/user-store';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme } = useUserStore();

  const customTheme = createTheme(themeOptions[theme]);

  return <MuiThemeProvider theme={customTheme}>{children}</MuiThemeProvider>;
};
