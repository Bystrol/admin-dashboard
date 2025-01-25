import { colors } from '@/theme/colors';
import { Theme } from '@/store/user-store';
import { OrderStatus } from '../actions/get-orders';

export const orderStatusColors: {
  [key in OrderStatus]: {
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
