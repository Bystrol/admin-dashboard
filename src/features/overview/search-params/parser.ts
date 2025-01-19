import { createParser } from 'nuqs/server';
import { searchParamsSchema } from './schema';

export const parseOverviewSearchParams = createParser({
  parse(value) {
    const json = JSON.parse(value);

    json.revenueDateRange = json.revenueDateRange.map((date: string) =>
      date ? new Date(date) : null
    );

    const { revenueDateRange } = searchParamsSchema.parse(json);

    return { revenueDateRange };
  },
  serialize(value) {
    return JSON.stringify(value);
  },
});
