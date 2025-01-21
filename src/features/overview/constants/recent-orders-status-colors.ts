import { colors } from '@/theme/colors';
import { RecentOrdersStatus } from '../actions/get-recent-orders';
import { Theme } from '@/store/user-store';

export const recentOrdersStatusColors: {
  [key in RecentOrdersStatus]: {
    [key in Theme]: {
      primary: string;
      secondary: string;
    };
  };
} = {
  PAID: {
    light: {
      primary: colors.system['green-400'],
      secondary: `${colors.system['green-300']}50`,
    },
    dark: {
      primary: colors.system['green-300'],
      secondary: `${colors.system['green-300']}50`,
    },
  },
  PENDING: {
    light: {
      primary: colors.system['orange-400'],
      secondary: colors.others['yellow-50'],
    },
    dark: {
      primary: colors.secondary[5],
      secondary: colors.others['yellow-50'],
    },
  },
};
