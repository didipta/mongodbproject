import express from 'express';
import { UserRoutes } from '../modules/Users/user.route';
import { cowRoutes } from '../modules/Cows/cow.route';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/cows',
    route: cowRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
