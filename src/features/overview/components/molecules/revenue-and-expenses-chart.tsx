'use client';

import { colors } from '@/theme/colors';
import { LineChart } from '@mui/x-charts/LineChart';
import { RevenueAndExpensesResponse } from '../../actions/get-revenue-and-expenses';
import dayjs from 'dayjs';
import 'dayjs/locale/pl';
import { useCurrentLocale } from '@/locales/client';

interface Props {
  data: RevenueAndExpensesResponse[];
}

export const RevenueAndExpensesChart = ({ data }: Props) => {
  const locale = useCurrentLocale();

  const monthlyRevenue = data.map((month) => month.revenue);

  const monthlyExpenses = data.map((month) => month.expenses);

  return (
    <LineChart
      series={[
        {
          data: monthlyRevenue,
          color: colors.primary[1],
        },
        {
          data: monthlyExpenses,
          color: colors.secondary[3],
        },
      ]}
      height={400}
      xAxis={[
        {
          data: monthlyRevenue.map((_revenue, index) => index),
          scaleType: 'point',
          valueFormatter: (index: number) =>
            dayjs(data[index]?.timestamp).locale(locale).format('MMM'),
        },
      ]}
      yAxis={[
        {
          valueFormatter: (value) => `${value / 1000}K`,
        },
      ]}
      axisHighlight={{ x: data.length > 0 ? 'line' : 'none', y: data.length > 0 ? 'band' : 'none' }}
    />
  );
};
