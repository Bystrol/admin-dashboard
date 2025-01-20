import { RecentOrdersStatus } from '@/features/overview/actions/get-recent-orders';
import { recentOrdersStatusColors } from '@/features/overview/constants/recent-orders-status-colors';
import { recentOrdersStatusTranslations } from '@/features/overview/constants/recent-orders-status-translations';
import { getI18n } from '@/locales/server';
import { Box, Chip, TableCell, TableRow, Typography } from '@mui/material';
import dayjs from 'dayjs';

interface Props {
  id: string;
  date: string;
  status: RecentOrdersStatus;
  total: number;
}

export const RecentOrdersTableRow = async ({ id, date, status, total }: Props) => {
  const t = await getI18n();

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
        <Chip
          label={t(recentOrdersStatusTranslations[status])}
          icon={
            <Box
              sx={{
                borderRadius: '100%',
                width: 4,
                height: 4,
                backgroundColor: recentOrdersStatusColors[status].primary,
              }}
            />
          }
          sx={{
            borderRadius: 1,
            backgroundColor: recentOrdersStatusColors[status].secondary,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: recentOrdersStatusColors[status].primary,
            color: recentOrdersStatusColors[status].primary,
            fontSize: '12px',
            fontWeight: 'bold',
            paddingLeft: '4px',
          }}
        />
      </TableCell>

      <TableCell>
        <Typography variant="body1">{`$${total.toFixed(2)}`}</Typography>
      </TableCell>
    </TableRow>
  );
};
