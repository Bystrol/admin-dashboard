import { RecentOrdersStatus } from '@/features/overview/actions/get-recent-orders';
import { TableCell, TableRow, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { RecentOrdersStatusChip } from '../../atoms/recent-orders-status-chip';

interface Props {
  id: string;
  date: string;
  status: RecentOrdersStatus;
  total: number;
}

export const RecentOrdersTableRow = async ({ id, date, status, total }: Props) => {
  return (
    <TableRow>
      <TableCell>
        <Typography
          variant="body1"
          sx={{ textTransform: 'uppercase' }}
        >{`#${id.slice(-4)}`}</Typography>
      </TableCell>

      <TableCell>
        <Typography variant="body1">{dayjs(date).format('MMM D, h:mm A')}</Typography>
      </TableCell>

      <TableCell>
        <RecentOrdersStatusChip status={status} />
      </TableCell>

      <TableCell>
        <Typography variant="body1">{`$${total.toFixed(2)}`}</Typography>
      </TableCell>
    </TableRow>
  );
};
