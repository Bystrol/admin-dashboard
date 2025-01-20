import { z } from 'zod';

export const searchParamsSchema = z.object({
  revenueDateRange: z.tuple([z.date().nullable(), z.date().nullable()]),
});

export type OverviewSearchParams = z.infer<typeof searchParamsSchema>;
