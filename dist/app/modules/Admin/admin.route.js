"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const adminvalidation_1 = __importDefault(require("./adminvalidation"));
const admin_controller_1 = require("./admin.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const roleenum_1 = require("../../../roleenum");
const router = express_1.default.Router();
router.post('/create-admin', (0, validateRequest_1.default)(adminvalidation_1.default), admin_controller_1.AdminController.createUser);
router.get('/:id', (0, auth_1.default)(roleenum_1.ENUM_USER_ROLE.ADMIN), admin_controller_1.AdminController.getSingleuser);
exports.AdminRoute = router;
