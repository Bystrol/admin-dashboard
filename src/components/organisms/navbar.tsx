import { Box } from '@mui/material';
import { ToggleThemeButton } from '../atoms/toggle-theme-button';
import { LanguagePopover } from '../molecules/language-popover';
import { UserButton } from '../atoms/user-button';
import { colors } from '@/theme/colors';
import { Suspense } from 'react';

export const Navbar = () => {
  return (
    <Box
      sx={{
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: colors.secondary[4],
        padding: '16px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <ToggleThemeButton />

      <Suspense>
        <LanguagePopover />
      </Suspense>

      <UserButton />
    </Box>
  );
};
