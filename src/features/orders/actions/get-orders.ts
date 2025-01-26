import { database } from '@/database/client';
import { Collection } from 'mongodb';

export type OrderStatus = 'PAID' | 'PENDING';

export interface OrdersResponse {
  _id: string;
  date: string;
  status: OrderStatus;
  amount: number;
}

export const getOrders = async (
  query: string,
  page: number,
  perPage: number
): Promise<{
  orders: OrdersResponse[];
  totalCount: number;
}> => {
  const db = await database();
  const collection: Collection<OrdersResponse> = db.collection('orders');

  const filter = query ? { id: { $regex: query } } : {};

  const filteredOrders = await collection.find(filter).toArray();

  const filteredAndPaginatedOrders = await collection
    .find(filter)
    .sort({ $natural: -1 })
    .limit(perPage)
    .skip((page - 1) * perPage)
    .toArray();

  const ordersDto = filteredAndPaginatedOrders.map((order) => ({
    ...order,
    _id: order._id.toString(),
  }));

  return {
    orders: ordersDto,
    totalCount: filteredOrders.length,
  };
};
