import express from 'express';
import { UserController } from './user.controller';
import auth from '../../middleware/auth';
import { ENUM_USER_ROLE } from '../../../roleenum';
const router = express.Router();

router.get('/', auth(ENUM_USER_ROLE.ADMIN), UserController.getAlluser);
router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.BUYER, ENUM_USER_ROLE.SELLER),
  UserController.getSingleuser
);
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.updateuser);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.deleteuser);

export const UserRoutes = router;
