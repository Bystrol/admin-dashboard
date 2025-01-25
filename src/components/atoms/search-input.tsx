'use client';

import { ordersDefaultSearchParams } from '@/features/orders/search-params/default-values';
import { SearchIcon } from '@/icons/search';
import { useI18n } from '@/locales/client';
import { debounce } from '@/utils/debounce';
import { revalidatePathOnServer } from '@/utils/revalidate-path-on-server';
import { wait } from '@/utils/wait';
import { InputAdornment, TextField } from '@mui/material';
import { parseAsInteger, parseAsString, useQueryState } from 'nuqs';
import { ChangeEvent } from 'react';

interface Props {
  pathToRevalidate?: string;
}

export const SearchInput = ({ pathToRevalidate }: Props) => {
  const t = useI18n();

  const [query, setQuery] = useQueryState('query', parseAsString.withDefault(''));

  const [_, setPage] = useQueryState(
    'page',
    parseAsInteger.withDefault(ordersDefaultSearchParams.page)
  );

  const handleQueryChange = async (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setQuery(event.target.value);
    setPage(1);

    if (pathToRevalidate) {
      await wait(1000);
      revalidatePathOnServer(pathToRevalidate);
    }
  };

  return (
    <TextField
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
      variant="standard"
      placeholder={t('orders.common.searchPlaceholder')}
      defaultValue={query}
      onChange={debounce(handleQueryChange)}
    />
  );
};
