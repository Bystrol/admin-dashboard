import { ThemeOptions } from '@mui/material';
import { colors } from './colors';

interface Theme {
  light: ThemeOptions;
  dark: ThemeOptions;
}

export const themeOptions: Theme = {
  light: {
    palette: {
      mode: 'light',
      primary: {
        main: colors.primary[1],
      },
      secondary: {
        main: colors.secondary[1],
      },
      background: {
        default: colors.neutral[100],
      },
      text: {
        primary: colors.neutral[800],
        secondary: colors.neutral[500],
      },
    },
  },
  dark: {
    palette: {
      mode: 'dark',
      primary: {
        main: colors.primary[1],
      },
      secondary: {
        main: colors.secondary[1],
      },
      background: {
        default: colors.neutral[800],
      },
      text: {
        primary: colors.neutral[100],
        secondary: colors.neutral[500],
      },
    },
  },
};
