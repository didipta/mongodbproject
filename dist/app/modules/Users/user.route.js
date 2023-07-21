"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const uservalidation_1 = __importDefault(require("./uservalidation"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const user_controller_1 = require("./user.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const roleenum_1 = require("../../../roleenum");
const router = express_1.default.Router();
router.post('/signup', (0, validateRequest_1.default)(uservalidation_1.default), user_controller_1.UserController.createUser);
router.get('/', (0, auth_1.default)(roleenum_1.ENUM_USER_ROLE.ADMIN), user_controller_1.UserController.getAlluser);
router.get('/:id', (0, auth_1.default)(roleenum_1.ENUM_USER_ROLE.ADMIN, roleenum_1.ENUM_USER_ROLE.BUYER, roleenum_1.ENUM_USER_ROLE.SELLER), user_controller_1.UserController.getSingleuser);
router.patch('/:id', (0, auth_1.default)(roleenum_1.ENUM_USER_ROLE.ADMIN), user_controller_1.UserController.updateuser);
router.delete('/:id', (0, auth_1.default)(roleenum_1.ENUM_USER_ROLE.ADMIN), user_controller_1.UserController.deleteuser);
exports.UserRoutes = router;
