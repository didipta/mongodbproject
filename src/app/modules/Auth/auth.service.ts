import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { Admin } from '../Admin/admin.model';
import {
  ILoginUser,
  ILoginUserResponse,
  IRefreshTokenResponse,
} from './auth.interface';
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
    !(await User.isPasswordMatched(password, isuserExist.password))
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

const refreshToken = async (token: string): Promise<IRefreshTokenResponse> => {
  //verify token
  // invalid token - synchronous
  let verifiedToken = null;
  try {
    verifiedToken = jwtHelpers.verifyToken(
      token,
      config.jwt_refresh_secret as Secret
    );
  } catch (err) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Invalid Refresh Token');
  }

  const { phone } = verifiedToken;

  // tumi delete hye gso  kintu tumar refresh token ase
  // checking deleted user's refresh token

  const isUserExist = await User.isUserExist(phone);
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }
  //generate new token

  const newAccessToken = jwtHelpers.createToken(
    {
      id: isUserExist.phoneNumber,
      role: isUserExist.role,
    },
    config.jwt_secret as Secret,
    config.jwt_expires_in as string
  );

  return {
    accessToken: newAccessToken,
  };
};

export const authService = {
  loginAdmin,
  loginuser,
  refreshToken,
};
