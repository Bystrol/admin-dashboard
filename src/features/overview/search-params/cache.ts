import { createSearchParamsCache } from 'nuqs/server';
import { parseOverviewSearchParams } from './parser';
import { defaultOverviewSearchParams } from './default-values';

export const searchParamsCache = createSearchParamsCache({
  overview: parseOverviewSearchParams.withDefault({
    revenueDateRange: [
      defaultOverviewSearchParams.revenueDateRange[0],
      defaultOverviewSearchParams.revenueDateRange[1],
    ],
  }),
});
