import { Box, Typography } from '@mui/material';
import { RevenueAndExpenses } from '../organisms/revenue-and-expenses';
import { getI18n } from '@/locales/server';
import { currentUser } from '@clerk/nextjs/server';
import { UsersByDevice } from '../organisms/users-by-device';
import { AsyncComponentFallback } from '@/components/molecules/async-component-fallback';

export const Overview = async () => {
  const t = await getI18n();
  const user = await currentUser();

  const nameToDisplay = user?.username || user?.primaryEmailAddress?.emailAddress;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <Box>
        <Typography variant="h4">
          {t('overview.overview.welcomeBack', {
            username: nameToDisplay,
          })}
        </Typography>

        <Typography variant="body1" color="textSecondary">
          {t('overview.overview.subheader')}
        </Typography>
      </Box>

      <AsyncComponentFallback>
        <RevenueAndExpenses />
      </AsyncComponentFallback>

      <Typography variant="h4">{t('overview.overview.reports.title')}</Typography>

      <AsyncComponentFallback>
        <UsersByDevice />
      </AsyncComponentFallback>
    </Box>
  );
};
