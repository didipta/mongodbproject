import express from 'express';
import { UserRoutes } from '../modules/Users/user.route';
import { cowRoutes } from '../modules/Cows/cow.route';
import { OrderRoutes } from '../modules/orders/order.router';
import { AdminRoute } from '../modules/Admin/admin.route';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/admins',
    route: AdminRoute,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/cows',
    route: cowRoutes,
  },
  {
    path: '/orders',
    route: OrderRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
