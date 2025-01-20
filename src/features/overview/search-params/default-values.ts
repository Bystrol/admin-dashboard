import { OverviewSearchParams } from './schema';
import dayjs from 'dayjs';

export const defaultOverviewSearchParams: OverviewSearchParams = {
  revenueDateRange: [
    dayjs().startOf('month').subtract(11, 'month').toDate(),
    dayjs().startOf('month').toDate(),
  ],
};
