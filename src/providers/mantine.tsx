'use client';

import { ReactNode } from 'react';
import { MantineProvider as Provider } from '@mantine/core';
import { useUserStore } from '@/store/user-store';

export const MantineProvider = ({ children }: { children: ReactNode }) => {
  const { theme: userTheme } = useUserStore();

  return <Provider forceColorScheme={userTheme}>{children}</Provider>;
};
