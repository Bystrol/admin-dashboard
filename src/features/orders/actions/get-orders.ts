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

  const allOrders = await collection.find({}).toArray();

  const filter = query ? { id: { $regex: query } } : {};

  const orders = await collection
    .find(filter)
    .sort({ $natural: -1 })
    .limit(perPage)
    .skip((page - 1) * perPage)
    .toArray();

  const ordersDto = orders.map((order) => ({
    ...order,
    _id: order._id.toString(),
  }));

  return {
    orders: ordersDto,
    totalCount: allOrders.length,
  };
};
