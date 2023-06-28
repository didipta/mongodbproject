import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { AuthValidation } from './authvalidation';
import { authController } from './auth.controller';

const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidation.loginZodSchema),
  authController.loginAdmin
);

export const AuthRoute = router;
