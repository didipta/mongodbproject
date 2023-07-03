import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import adminvalidation from './adminvalidation';
import { AdminController } from './admin.controller';
import auth from '../../middleware/auth';
import { ENUM_USER_ROLE } from '../../../roleenum';

const router = express.Router();

router.post(
  '/create-admin',
  validateRequest(adminvalidation),
  AdminController.createUser
);

router.get('/:id', auth(ENUM_USER_ROLE.ADMIN), AdminController.getSingleuser);

export const AdminRoute = router;
