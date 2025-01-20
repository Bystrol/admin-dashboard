import { database } from '@/database/client';
import { Collection } from 'mongodb';

export type RecentOrdersStatus = 'PAID' | 'PENDING';

export interface RecentOrdersResponse {
  _id: string;
  date: string;
  status: RecentOrdersStatus;
  amount: number;
}

export const getRecentOrders = async (): Promise<RecentOrdersResponse[]> => {
  const db = await database();
  const collection: Collection<RecentOrdersResponse> = db.collection('orders');

  const recentOrders = await collection.find().sort({ $natural: -1 }).limit(4).toArray();

  const recentOrdersDto = recentOrders.map((order) => ({
    ...order,
    _id: order._id.toString(),
  }));

  return recentOrdersDto;
};
