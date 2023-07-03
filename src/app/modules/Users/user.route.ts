import express from 'express';
import uservalidation from './uservalidation';
import validateRequest from '../../middleware/validateRequest';
import { UserController } from './user.controller';
import auth from '../../middleware/auth';
import { ENUM_USER_ROLE } from '../../../roleenum';
const router = express.Router();

router.post(
  '/signup',
  validateRequest(uservalidation),
  UserController.createUser
);
router.get('/', auth(ENUM_USER_ROLE.ADMIN), UserController.getAlluser);
router.get('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.getSingleuser);
router.patch('/:id', UserController.updateuser);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.deleteuser);

export const UserRoutes = router;
