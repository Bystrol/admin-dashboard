import { OverviewContainer } from '@/features/overview/containers/overview';
import { searchParamsCache } from '@/features/overview/search-params/cache';
import { type SearchParams } from 'nuqs/server';

interface Props {
  searchParams: Promise<SearchParams>;
}

export default async function OverviewPage({ searchParams }: Props) {
  await searchParamsCache.parse(searchParams);

  return <OverviewContainer />;
}
