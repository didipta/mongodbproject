import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import cowvalidation from './cowvalidation';
import { cowController } from './cow.controller';
import auth from '../../middleware/auth';
import { ENUM_USER_ROLE } from '../../../roleenum';
const router = express.Router();

router.post(
  '/',
  validateRequest(cowvalidation),
  auth(ENUM_USER_ROLE.SELLER),
  cowController.createcow
);
router.get(
  '/',
  auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.BUYER),
  cowController.getAllcows
);
router.get(
  '/:id',
  auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.BUYER),
  cowController.getSinglecow
);
router.patch('/:id', auth(ENUM_USER_ROLE.SELLER), cowController.updatecow);
router.delete('/:id', auth(ENUM_USER_ROLE.SELLER), cowController.deletecow);

export const cowRoutes = router;
