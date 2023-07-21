import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { AuthValidation } from './authvalidation';
import { authController } from './auth.controller';
import { UserController } from '../Users/user.controller';
import uservalidation from '../Users/uservalidation';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(uservalidation),
  UserController.createUser
);

router.post(
  '/login',
  validateRequest(AuthValidation.loginZodSchema),
  authController.loginuser
);
router.post(
  '/refresh-token',
  validateRequest(AuthValidation.refreshTokenZodSchema),
  authController.refreshToken
);
export const AuthRoute = router;
