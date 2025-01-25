import { createSearchParamsCache, parseAsInteger, parseAsString } from 'nuqs/server';
import { ordersDefaultSearchParams } from './default-values';

export const ordersSearchParamsCache = createSearchParamsCache({
  query: parseAsString.withDefault(ordersDefaultSearchParams.query),
  page: parseAsInteger.withDefault(ordersDefaultSearchParams.page),
  perPage: parseAsInteger.withDefault(ordersDefaultSearchParams.perPage),
});
