import { z } from 'zod';

export const ordersSearchParamsSchema = z.object({
  query: z.string(),
  page: z.number(),
  perPage: z.number(),
});

export type OrdersSearchParams = z.infer<typeof ordersSearchParamsSchema>;
