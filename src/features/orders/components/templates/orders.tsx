import { getOrders } from '../../actions/get-orders';
import { ordersSearchParamsCache } from '../../search-params/cache';
import { OrdersTable } from '../molecules/orders/orders-table';
import { Pagination } from '@/components/organisms/pagination';
import { Box, Card, Typography } from '@mui/material';
import { getI18n } from '@/locales/server';
import { SearchInput } from '@/components/atoms/search-input';

export const Orders = async () => {
  const query = ordersSearchParamsCache.get('query');
  const page = ordersSearchParamsCache.get('page');
  const perPage = ordersSearchParamsCache.get('perPage');

  const { orders, totalCount } = await getOrders(query, page, perPage);

  const t = await getI18n();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
        <Typography variant="h4">{t('orders.common.title')}</Typography>

        <SearchInput pathToRevalidate="/orders" />
      </Box>

      <Card variant="outlined">
        <OrdersTable data={orders} />
      </Card>

      <Pagination totalCount={totalCount} pathToRevalidate="/orders" />
    </Box>
  );
};
