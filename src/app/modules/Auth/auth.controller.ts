import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { authService } from './auth.service';
import sendResponse from '../../../shared/sendResponse';
import { ILoginUserResponse } from './auth.interface';

const loginAdmin = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body;
  const result = await authService.loginAdmin(loginData);
  // const { refreshToken, ...others } = result;

  // set refresh token into cookie

  // const cookieOptions = {
  //   secure: config.env === 'production',
  //   httpOnly: true,
  // };

  // res.cookie('refreshToken', refreshToken, cookieOptions);

  sendResponse<ILoginUserResponse>(res, {
    statusCode: 200,
    success: true,
    message: 'User lohggedin successfully !',
    data: result,
  });
});

export const authController = {
  loginAdmin,
};
