import { RecentOrdersResponse } from '@/features/overview/actions/get-recent-orders';
import { getI18n } from '@/locales/server';
import { Table, TableBody, TableCell, TableHead, Typography } from '@mui/material';
import { RecentOrdersTableRow } from './recent-orders-table-row';

interface Props {
  data: RecentOrdersResponse[];
}

const columns = [
  {
    id: 'order',
    label: 'overview.overview.recentOrders.order',
  },
  {
    id: 'date',
    label: 'overview.overview.recentOrders.date',
  },
  {
    id: 'status',
    label: 'overview.overview.recentOrders.status',
  },
  {
    id: 'total',
    label: 'overview.overview.recentOrders.total',
  },
] as const;

export const RecentOrdersTable = async ({ data }: Props) => {
  const t = await getI18n();

  return (
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
          <RecentOrdersTableRow
            key={order._id}
            id={order._id}
            date={order.date}
            status={order.status}
            total={order.amount}
          />
        ))}
      </TableBody>
    </Table>
  );
};
