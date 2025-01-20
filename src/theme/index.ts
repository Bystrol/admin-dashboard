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
        paper: colors.neutral[400],
      },
      text: {
        primary: colors.neutral[800],
        secondary: colors.neutral[500],
      },
    },
    typography: {
      fontFamily: 'Mona Sans',
      h4: {
        fontSize: '24px',
        fontWeight: 600,
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: colors.system['blue-100'],
            border: `1px solid ${colors.neutral[400]}`,
            padding: '20px',
          },
        },
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
        paper: colors.neutral[700],
      },
      text: {
        primary: colors.neutral[100],
        secondary: colors.neutral[400],
      },
    },
    typography: {
      fontFamily: 'Mona Sans',
      h4: {
        fontSize: '24px',
        fontWeight: 600,
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: colors.secondary[1],
            border: `1px solid ${colors.secondary[4]}`,
            padding: '20px',
          },
        },
      },
    },
  },
};
