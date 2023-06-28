import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { AuthValidation } from './authvalidation';
import { authController } from './auth.controller';

const router = express.Router();

router.post(
  'admin/login',
  validateRequest(AuthValidation.loginZodSchema),
  authController.loginAdmin
);
router.post(
  'users/login',
  validateRequest(AuthValidation.loginZodSchema),
  authController.loginuser
);

export const AuthRoute = router;
