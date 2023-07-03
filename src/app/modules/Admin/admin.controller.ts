import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { Adminservice } from './admin.service';
import httpStatus from 'http-status';
import { IAdmin } from './admin.interface';
import sendResponse from '../../../shared/sendResponse';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../Healper/jwtHelpers';
import config from '../../../config';
import { Secret } from 'jsonwebtoken';

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const admin = req.body;
    const result = await Adminservice.createUser(admin);

    sendResponse<IAdmin>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Admin created successfully!',
      data: result,
    });
  }
);

const getSingleuser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  if (id === 'my-profile') {
    const token = req.headers.authorization;

    if (!token) {
      throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
    }
    // verify token
    let verifiedUser = null;
    verifiedUser = jwtHelpers.verifyToken(token, config.jwt_secret as Secret);

    const { phone } = verifiedUser;

    const result = await Adminservice.getmyprofile(phone);

    sendResponse<IAdmin>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single Admin fetched successfully',
      data: result,
    });
  } else {
    const result = await Adminservice.getSingleadmin(id);

    sendResponse<IAdmin>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single Admin fetched successfully',
      data: result,
    });
  }
});

export const AdminController = {
  createUser,
  getSingleuser,
};
