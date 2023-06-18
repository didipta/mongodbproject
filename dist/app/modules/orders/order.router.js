"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const ordervalidation_1 = __importDefault(require("./ordervalidation"));
const order_controller_1 = require("./order.controller");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(ordervalidation_1.default), order_controller_1.OrderController.createorder);
router.get('/', order_controller_1.OrderController.getallorders);
exports.OrderRoutes = router;
