import express from 'express';
import uservalidation from './uservalidation';
import validateRequest from '../../middleware/validateRequest';
import { UserController } from './user.controller';
const router = express.Router();

router.post(
  '/signup',
  validateRequest(uservalidation),
  UserController.createUser
);

export const UserRoutes = router;
