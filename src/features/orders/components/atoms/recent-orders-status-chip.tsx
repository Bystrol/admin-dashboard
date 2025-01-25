'use client';

import { Box, Chip } from '@mui/material';
import { useI18n } from '@/locales/client';
import { useUserStore } from '@/store/user-store';
import { OrderStatus } from '../../actions/get-orders';
import { orderStatusTranslations } from '../../constants/order-status-translations';
import { orderStatusColors } from '../../constants/order-status-colors';

interface Props {
  status: OrderStatus;
}

export const OrderStatusChip = ({ status }: Props) => {
  const t = useI18n();

  const { theme } = useUserStore();

  return (
    <Chip
      label={t(orderStatusTranslations[status])}
      icon={
        <Box
          sx={{
            borderRadius: '100%',
            width: 4,
            height: 4,
            backgroundColor: orderStatusColors[status][theme].primary,
          }}
        />
      }
      sx={{
        borderRadius: 1,
        backgroundColor: orderStatusColors[status][theme].secondary,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: orderStatusColors[status][theme].primary,
        color: orderStatusColors[status][theme].primary,
        fontSize: '12px',
        fontWeight: 'bold',
        paddingLeft: '4px',
      }}
    />
  );
};
