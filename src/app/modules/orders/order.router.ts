import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import ordervalidation from './ordervalidation';
import { OrderController } from './order.controller';
import { ENUM_USER_ROLE } from '../../../roleenum';
import auth from '../../middleware/auth';
const router = express.Router();

router.post(
  '/',
  validateRequest(ordervalidation),
  auth(ENUM_USER_ROLE.BUYER),
  OrderController.createorder
);
router.get(
  '/',
  auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.BUYER),
  OrderController.getallorders
);

export const OrderRoutes = router;
