'use client';

import { MoonIcon } from '@/icons/moon';
import { SunIcon } from '@/icons/sun';
import { Theme, useUserStore } from '@/store/user-store';
import { Button } from '@mui/material';
import { ReactNode } from 'react';

export const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useUserStore();

  const icon: Record<Theme, ReactNode> = {
    light: <MoonIcon fontSize="large" />,
    dark: <SunIcon fontSize="large" />,
  };

  return (
    <Button sx={{ borderRadius: '100%', minWidth: 0, width: 36, height: 36 }} onClick={toggleTheme}>
      {icon[theme]}
    </Button>
  );
};
