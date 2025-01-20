import { colors } from '@/theme/colors';
import { RecentOrdersStatus } from '../actions/get-recent-orders';

export const recentOrdersStatusColors: {
  [key in RecentOrdersStatus]: {
    primary: string;
    secondary: string;
  };
} = {
  PAID: {
    primary: colors.system['green-300'],
    secondary: `${colors.system['green-300']}50`,
  },
  PENDING: {
    primary: colors.secondary[5],
    secondary: colors.others['yellow-50'],
  },
};
