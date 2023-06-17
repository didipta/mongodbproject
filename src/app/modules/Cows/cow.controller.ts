import { Request, RequestHandler, Response } from 'express';
import sendResponse from '../../../shared/sendResponse';
import { ICow } from './cow.interface';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import { cowService } from './cow.service';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../shared/pagination';

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

const getAllcows = catchAsync(async (req: Request, res: Response) => {
  const paginationOptions = pick(req.query, paginationFields);

  const result = await cowService.getAllcows(paginationOptions);

  sendResponse<ICow[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cows fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSinglecow = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await cowService.getSinglecow(id);

  sendResponse<ICow>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single cow fetched successfully',
    data: result,
  });
});

const deletecow = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await cowService.deletecow(id);

  sendResponse<ICow>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cow deleted successfully',
    data: result,
  });
});

export const cowController = {
  createcow,
  getAllcows,
  getSinglecow,
  deletecow,
};
