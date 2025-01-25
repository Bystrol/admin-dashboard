import { RecentOrdersResponse } from '@/features/overview/actions/get-recent-orders';
import { getI18n } from '@/locales/server';
import { Table, TableBody, TableCell, TableHead, Typography } from '@mui/material';
import { OrdersTableRow } from './orders-table-row';

interface Props {
  data: RecentOrdersResponse[];
}

const columns = [
  {
    id: 'order',
    label: 'orders.common.order',
  },
  {
    id: 'date',
    label: 'orders.common.date',
  },
  {
    id: 'status',
    label: 'orders.common.status',
  },
  {
    id: 'total',
    label: 'orders.common.total',
  },
] as const;

export const OrdersTable = async ({ data }: Props) => {
  const t = await getI18n();

  return (
    <>
      <Table>
        <TableHead>
          {columns.map((column) => (
            <TableCell key={column.id}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {t(column.label)}
              </Typography>
            </TableCell>
          ))}
        </TableHead>

        <TableBody>
          {data.map((order) => (
            <OrdersTableRow
              key={order._id}
              id={order._id}
              date={order.date}
              status={order.status}
              total={order.amount}
            />
          ))}
        </TableBody>
      </Table>

      {data.length === 0 ? (
        <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>
          {t('orders.common.noOrders')}
        </Typography>
      ) : null}
    </>
  );
};
