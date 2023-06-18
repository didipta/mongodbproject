import { Iorder } from './order.interface';
import { Order } from './order.model';

const createorder = async (payload: Iorder): Promise<Iorder | null> => {
  const result = await Order.create(payload);
  return result;
};

const getallorders = async (): Promise<Iorder[] | null> => {
  const result = await Order.find();
  return result;
};

export const OrderService = {
  createorder,
  getallorders,
};
