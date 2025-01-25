import { OrdersContainer } from '@/features/orders/containers/orders';
import { ordersSearchParamsCache } from '@/features/orders/search-params/cache';
import { type SearchParams } from 'nuqs/server';

interface Props {
  searchParams: Promise<SearchParams>;
}

export default async function OrdersPage({ searchParams }: Props) {
  await ordersSearchParamsCache.parse(searchParams);

  return <OrdersContainer />;
}
