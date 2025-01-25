'use client';

import { Box, Chip } from '@mui/material';
import { recentOrdersStatusTranslations } from '../../constants/recent-orders-status-translations';
import { recentOrdersStatusColors } from '../../constants/recent-orders-status-colors';
import { RecentOrdersStatus } from '../../actions/get-recent-orders';
import { useI18n } from '@/locales/client';
import { useUserStore } from '@/store/user-store';

interface Props {
  status: RecentOrdersStatus;
}

export const RecentOrdersStatusChip = ({ status }: Props) => {
  const t = useI18n();

  const { theme } = useUserStore();

  return (
    <Chip
      label={t(recentOrdersStatusTranslations[status])}
      icon={
        <Box
          sx={{
            borderRadius: '100%',
            width: 4,
            height: 4,
            backgroundColor: recentOrdersStatusColors[status][theme].primary,
          }}
        />
      }
      sx={{
        borderRadius: 1,
        backgroundColor: recentOrdersStatusColors[status][theme].secondary,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: recentOrdersStatusColors[status][theme].primary,
        color: recentOrdersStatusColors[status][theme].primary,
        fontSize: '12px',
        fontWeight: 'bold',
        paddingLeft: '4px',
      }}
    />
  );
};
