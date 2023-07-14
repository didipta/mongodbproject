'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const user_route_1 = require('../modules/Users/user.route');
const cow_route_1 = require('../modules/Cows/cow.route');
const order_router_1 = require('../modules/orders/order.router');
const admin_route_1 = require('../modules/Admin/admin.route');
const auth_router_1 = require('../modules/Auth/auth.router');
const router = express_1.default.Router();
const moduleRoutes = [
  {
    path: '/admins',
    route: admin_route_1.AdminRoute,
  },
  {
    path: '/users',
    route: user_route_1.UserRoutes,
  },
  {
    path: '/auth',
    route: auth_router_1.AuthRoute,
  },
  {
    path: '/cows',
    route: cow_route_1.cowRoutes,
  },
  {
    path: '/orders',
    route: order_router_1.OrderRoutes,
  },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
