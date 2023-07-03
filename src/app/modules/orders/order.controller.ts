import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { OrderService } from './order.service';
import sendResponse from '../../../shared/sendResponse';
import { Iorder } from './order.interface';
import httpStatus from 'http-status';

const createorder: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const order = req.body;

    const result = await OrderService.createorder(order);
    sendResponse<Iorder>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'order created successfully!',
      data: result,
    });
  }
);

const getallorders: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await OrderService.getallorders();
    sendResponse<Iorder[] | null>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'order list show successfully!',
      data: result,
    });
  }
);

const getSingleorder: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await OrderService.getSingleorder(id);
    sendResponse<Iorder | null>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'order show successfully!',
      data: result,
    });
  }
);

export const OrderController = {
  createorder,
  getallorders,
  getSingleorder,
};
