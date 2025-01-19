import { Box, Card, Typography } from '@mui/material';
import { getRevenueAndExpenses } from '../../actions/get-revenue-and-expenses';
import { searchParamsCache } from '../../search-params/cache';
import { DateRangePicker } from '../molecules/date-range-picker';
import { getI18n } from '@/locales/server';
import { ChartLabel } from '../atoms/chart-label';
import { colors } from '@/theme/colors';
import { RevenueAndExpensesChart } from '../molecules/revenue-and-expenses-chart';

export const RevenueAndExpenses = async () => {
  const { revenueDateRange } = searchParamsCache.get('overview');

  const revenueAndExpenses = await getRevenueAndExpenses(revenueDateRange);

  const t = await getI18n();

  const monthlyRevenue = revenueAndExpenses.map((month) => month.revenue);

  const totalRevenue = monthlyRevenue.reduce((previousRevenue, currentRevenue) => {
    const revenue = previousRevenue + currentRevenue;

    return revenue;
  }, 0);

  const totalRevenueInThousands = (totalRevenue / 1000).toFixed(1);

  return (
    <Card variant="outlined" sx={{ padding: '30px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="body1" color="textSecondary">
            {t('overview.overview.revenueAndExpenses.totalRevenue')}
          </Typography>

          <Typography variant="h4">{`$${totalRevenueInThousands}K`}</Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <ChartLabel
            badgeColor="primary.main"
            labelText={t('overview.overview.revenueAndExpenses.revenue')}
          />

          <ChartLabel
            badgeColor={colors.secondary[3]}
            labelText={t('overview.overview.revenueAndExpenses.expenses')}
          />

          <DateRangePicker />
        </Box>
      </Box>

      <RevenueAndExpensesChart data={revenueAndExpenses} />
    </Card>
  );
};
