'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.cowRoutes = void 0;
const express_1 = __importDefault(require('express'));
const validateRequest_1 = __importDefault(
  require('../../middleware/validateRequest')
);
const cowvalidation_1 = __importDefault(require('./cowvalidation'));
const cow_controller_1 = require('./cow.controller');
const auth_1 = __importDefault(require('../../middleware/auth'));
const roleenum_1 = require('../../../roleenum');
const router = express_1.default.Router();
router.post(
  '/',
  (0, validateRequest_1.default)(cowvalidation_1.default),
  (0, auth_1.default)(roleenum_1.ENUM_USER_ROLE.SELLER),
  cow_controller_1.cowController.createcow
);
router.get(
  '/',
  (0, auth_1.default)(
    roleenum_1.ENUM_USER_ROLE.SELLER,
    roleenum_1.ENUM_USER_ROLE.ADMIN,
    roleenum_1.ENUM_USER_ROLE.BUYER
  ),
  cow_controller_1.cowController.getAllcows
);
router.get(
  '/:id',
  (0, auth_1.default)(
    roleenum_1.ENUM_USER_ROLE.SELLER,
    roleenum_1.ENUM_USER_ROLE.ADMIN,
    roleenum_1.ENUM_USER_ROLE.BUYER
  ),
  cow_controller_1.cowController.getSinglecow
);
router.patch(
  '/:id',
  (0, auth_1.default)(roleenum_1.ENUM_USER_ROLE.SELLER),
  cow_controller_1.cowController.updatecow
);
router.delete(
  '/:id',
  (0, auth_1.default)(roleenum_1.ENUM_USER_ROLE.SELLER),
  cow_controller_1.cowController.deletecow
);
exports.cowRoutes = router;
