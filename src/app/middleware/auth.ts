import { NextFunction, Request, Response } from 'express';
import { jwtHelpers } from '../Healper/jwtHelpers';
import config from '../../config';
import ApiError from '../../errors/ApiError';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import { User } from '../modules/Users/User.model';

const auth =
  (...requiredRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      //get authorization token
      const token = req.headers.authorization;
      if (!token) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
      }
      // verify token
      let verifiedUser = null;

      verifiedUser = jwtHelpers.verifyToken(token, config.jwt_secret as Secret);

      // role diye guard korar jnno
      if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
        throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
      }

      // id diye user get

      const { phone } = verifiedUser;
      const isUserExist = await User.isUserExist(phone);
      if (!isUserExist) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
      }

      // get user from db

      next();
    } catch (error) {
      next(error);
    }
  };

export default auth;
