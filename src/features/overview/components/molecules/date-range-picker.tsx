'use client';

import { CalendarIcon } from '@/icons/calendar';
import { ChevronDownIcon } from '@/icons/chevron-down';
import { DateFormatter, MonthPickerInput } from '@mantine/dates';
import { useQueryState } from 'nuqs';
import dayjs from 'dayjs';
import 'dayjs/locale/pl';
import { useCurrentLocale } from '@/locales/client';
import { parseOverviewSearchParams } from '../../search-params/parser';
import { defaultOverviewSearchParams } from '../../search-params/default-values';
import { revalidatePathOnServer } from '@/utils/revalidate-path-on-server';
import { wait } from '@/utils/wait';

const formatter: DateFormatter = ({ date, locale, format }) => {
  if (Array.isArray(date)) {
    const numberOfDates = date.filter((date) => date).length;

    if (numberOfDates === 1) {
      return dayjs(date[0]).locale(locale).format(format);
    }

    if (numberOfDates === 2) {
      return `${dayjs(date[0]).locale(locale).format(format)} - ${dayjs(date[1]).locale(locale).format(format)}`;
    }
  }

  return 'Pick date range';
};

export const DateRangePicker = () => {
  const locale = useCurrentLocale();

  const [value, setValue] = useQueryState(
    'overview',
    parseOverviewSearchParams.withDefault({
      revenueDateRange: [
        defaultOverviewSearchParams.revenueDateRange[0],
        defaultOverviewSearchParams.revenueDateRange[1],
      ],
    })
  );

  return (
    <MonthPickerInput
      type="range"
      valueFormat="MMM YYYY"
      locale={locale}
      valueFormatter={formatter}
      leftSection={<CalendarIcon fontSize="small" />}
      rightSection={<ChevronDownIcon fontSize="small" />}
      value={value.revenueDateRange}
      onChange={async (dates) => {
        setValue({ revenueDateRange: dates });

        if (dates.every((date) => !!date)) {
          await wait(2000);
          revalidatePathOnServer('/overview');
          return;
        }

        revalidatePathOnServer('/overview');
      }}
      style={{
        width: 180,
      }}
    />
  );
};
