"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const authvalidation_1 = require("./authvalidation");
const auth_controller_1 = require("./auth.controller");
const user_controller_1 = require("../Users/user.controller");
const uservalidation_1 = __importDefault(require("../Users/uservalidation"));
const router = express_1.default.Router();
router.post('/signup', (0, validateRequest_1.default)(uservalidation_1.default), user_controller_1.UserController.createUser);
router.post('/login', (0, validateRequest_1.default)(authvalidation_1.AuthValidation.loginZodSchema), auth_controller_1.authController.loginuser);
router.post('/refresh-token', (0, validateRequest_1.default)(authvalidation_1.AuthValidation.refreshTokenZodSchema), auth_controller_1.authController.refreshToken);
exports.AuthRoute = router;
