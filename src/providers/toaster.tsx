'use client';

import { useUserStore } from '@/store/user-store';
import { colors } from '@/theme/colors';
import { Toaster } from 'react-hot-toast';

export const ToasterProvider = () => {
  const { theme } = useUserStore();

  const backgroundColor: Record<typeof theme, string> = {
    light: colors.neutral[100],
    dark: colors.secondary[4],
  };

  const color: Record<typeof theme, string> = {
    light: colors.neutral[800],
    dark: colors.neutral[100],
  };

  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        style: {
          backgroundColor: backgroundColor[theme],
          color: color[theme],
        },
      }}
    />
  );
};
