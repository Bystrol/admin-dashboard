'use client';

import { TablePagination } from '@mui/material';
import { parseAsInteger, useQueryState } from 'nuqs';
import { ordersDefaultSearchParams } from '../../features/orders/search-params/default-values';
import { revalidatePathOnServer } from '@/utils/revalidate-path-on-server';
import { wait } from '@/utils/wait';
import { ChangeEvent, MouseEvent } from 'react';

interface Props {
  totalCount: number;
  pathToRevalidate?: string;
}

export const Pagination = ({ totalCount, pathToRevalidate }: Props) => {
  const [page, setPage] = useQueryState(
    'page',
    parseAsInteger.withDefault(ordersDefaultSearchParams.page)
  );

  const [perPage, setPerPage] = useQueryState(
    'perPage',
    parseAsInteger.withDefault(ordersDefaultSearchParams.perPage)
  );

  const handlePageChange = async (_: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage + 1);

    if (pathToRevalidate) {
      await wait(1000);
      revalidatePathOnServer(pathToRevalidate);
    }
  };

  const handlePerPageChange = async (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPerPage(parseInt(event.target.value));
    setPage(1);

    if (pathToRevalidate) {
      await wait(1000);
      revalidatePathOnServer(pathToRevalidate);
    }
  };

  return (
    <TablePagination
      count={totalCount}
      page={page - 1}
      onPageChange={handlePageChange}
      rowsPerPage={perPage}
      onRowsPerPageChange={handlePerPageChange}
      sx={{ display: 'flex', justifyContent: 'center' }}
    />
  );
};
