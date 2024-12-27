import { appName } from '@/config';
import { AppLogoIcon } from '@/icons/app-logo';
import { colors } from '@/theme/colors';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { SidebarList } from './sidebar-list';

export const Sidebar = () => {
  return (
    <Box
      sx={{
        minWidth: 300,
        height: '100vh',
        padding: 3,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        borderRightWidth: 1,
        borderRightStyle: 'solid',
        borderRightColor: colors.secondary[4],
      }}
    >
      <Link href="/" style={{ textDecoration: 'none' }}>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <AppLogoIcon fontSize="large" />
          <Typography variant="h4" color="textPrimary">
            {appName}
          </Typography>
        </Box>
      </Link>

      <SidebarList />
    </Box>
  );
};
