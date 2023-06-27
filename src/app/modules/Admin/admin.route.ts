import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import adminvalidation from './adminvalidation';
import { AdminController } from './admin.controller';

const router = express.Router();

router.post(
  '/create-admin',
  validateRequest(adminvalidation),
  AdminController.createUser
);

export const AdminRoute = router;
