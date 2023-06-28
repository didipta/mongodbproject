import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { Admin } from '../Admin/admin.model';
import { ILoginUser, ILoginUserResponse } from './auth.interface';
import config from '../../../config';
import { Secret } from 'jsonwebtoken';
import { jwtHelpers } from '../../Healper/jwtHelpers';
import { User } from '../Users/User.model';

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

  const { phoneNumber: phone, role } = isAdminExist;
  const accessToken = jwtHelpers.createToken(
    { phone, role },
    config.jwt_secret as Secret,
    config.jwt_expires_in as string
  );

  const refreshToken = jwtHelpers.createToken(
    { phone, role },
    config.jwt_refresh_secret as Secret,
    config.jwt_refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
  };
};
const loginuser = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
  const { phoneNumber, password } = payload;

  const isuserExist = await User.isUserExist(phoneNumber);

  if (!isuserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  if (
    isuserExist.password &&
    !(await Admin.isPasswordMatched(password, isuserExist.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
  }

  const { phoneNumber: phone, role } = isuserExist;
  const accessToken = jwtHelpers.createToken(
    { phone, role },
    config.jwt_secret as Secret,
    config.jwt_expires_in as string
  );

  const refreshToken = jwtHelpers.createToken(
    { phone, role },
    config.jwt_refresh_secret as Secret,
    config.jwt_refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
  };
};

export const authService = {
  loginAdmin,
  loginuser,
};
