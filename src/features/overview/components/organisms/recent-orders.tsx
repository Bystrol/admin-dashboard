import { Card, Typography } from '@mui/material';
import { getRecentOrders } from '../../actions/get-recent-orders';
import { getI18n } from '@/locales/server';
import { RecentOrdersTable } from '../molecules/recent-orders/recent-orders-table';

export const RecentOrders = async () => {
  const recentOrders = await getRecentOrders();

  const t = await getI18n();

  return (
    <Card variant="outlined" sx={{ flex: 1 }}>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        {t('overview.overview.recentOrders.title')}
      </Typography>

      <RecentOrdersTable data={recentOrders} />
    </Card>
  );
};
