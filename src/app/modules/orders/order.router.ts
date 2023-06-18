import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import ordervalidation from './ordervalidation';
import { OrderController } from './order.controller';
const router = express.Router();

router.post('/', validateRequest(ordervalidation), OrderController.createorder);
router.get('/', OrderController.getallorders);

export const OrderRoutes = router;
