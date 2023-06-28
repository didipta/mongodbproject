import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { Admin } from '../Admin/admin.model';
import { ILoginUser, ILoginUserResponse } from './auth.interface';
// import config from '../../../config';
// import { Secret } from 'jsonwebtoken';

const loginAdmin = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
  const { phoneNumber, password } = payload;

  const isAdminExist = await Admin.isAdminExist(phoneNumber);

  if (!isAdminExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  if (
    isAdminExist.password &&
    !(await Admin.isPasswordMatched(password, isAdminExist.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
  }

  // const { phoneNumber:phone, role} = isUserExist;
  // const accessToken = jwtHelpers.createToken(
  //   { phone, role },
  //   config.jwt_secret as Secret,
  //   config.jwt_refresh_expires_in as string
  // );

  // const refreshToken = jwtHelpers.createToken(
  //   { userId, role },
  //   config.jwt.refresh_secret as Secret,
  //   config.jwt.refresh_expires_in as string
  // );

  const accessToken = 'liihh';
  const refreshToken = 'sgf';
  return {
    accessToken,
    refreshToken,
  };
};

export const authService = {
  loginAdmin,
};
