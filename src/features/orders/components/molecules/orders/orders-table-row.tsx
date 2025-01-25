import { OrderStatus } from '@/features/orders/actions/get-orders';
import { TableCell, TableRow, Typography } from '@mui/material';
import dayjs from 'dayjs';
import 'dayjs/locale/pl';
import { OrderStatusChip } from '../../atoms/recent-orders-status-chip';
import { getCurrentLocale } from '@/locales/server';

interface Props {
  id: string;
  date: string;
  status: OrderStatus;
  total: number;
}

export const OrdersTableRow = async ({ id, date, status, total }: Props) => {
  const locale = await getCurrentLocale();

  return (
    <TableRow>
      <TableCell>
        <Typography
          variant="body1"
          sx={{ textTransform: 'uppercase' }}
        >{`#${id.slice(-4)}`}</Typography>
      </TableCell>

      <TableCell>
        <Typography variant="body1">
          {dayjs(date).locale(locale).format('MMM D YYYY, h:mm A')}
        </Typography>
      </TableCell>

      <TableCell>
        <OrderStatusChip status={status} />
      </TableCell>

      <TableCell>
        <Typography variant="body1">{`$${total.toFixed(2)}`}</Typography>
      </TableCell>
    </TableRow>
  );
};
