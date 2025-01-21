'use server';

import { database } from '@/database/client';
import dayjs from 'dayjs';
import { Collection } from 'mongodb';

export interface RevenueAndExpensesResponse {
  _id: string;
  timestamp: string;
  revenue: number;
  expenses: number;
}

export const getRevenueAndExpenses = async (
  dateRange: [Date | null, Date | null]
): Promise<RevenueAndExpensesResponse[]> => {
  const db = await database();
  const collection: Collection<RevenueAndExpensesResponse> = db.collection('revenue_and_expenses');
  let filter = {};

  if (!!dateRange[0] && !!dateRange[1]) {
    filter = {
      timestamp: {
        $gte: new Date(dateRange[0]).toISOString(),
        $lte: dayjs(dateRange[1]).endOf('month').toISOString(),
      },
    };
  }

  const revenueAndExpenses = await collection.find(filter).toArray();
  console.log({ dateRange, filter, revenueAndExpenses });
  const revenueAndExpensesDto = revenueAndExpenses.map((object) => ({
    ...object,
    _id: object._id.toString(),
  }));

  return revenueAndExpensesDto;
};
