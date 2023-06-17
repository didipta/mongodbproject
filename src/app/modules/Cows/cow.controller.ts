import { Request, RequestHandler, Response } from 'express';
import sendResponse from '../../../shared/sendResponse';
import { ICow } from './cow.interface';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import { cowService } from './cow.service';

const createcow: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...cow } = req.body;
    const result = await cowService.createCow(cow);
    sendResponse<ICow>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'cow created successfully!',
      data: result,
    });
  }
);

export const cowController = {
  createcow,
};
