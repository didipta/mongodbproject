"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cowRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const cowvalidation_1 = __importDefault(require("./cowvalidation"));
const cow_controller_1 = require("./cow.controller");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(cowvalidation_1.default), cow_controller_1.cowController.createcow);
router.get('/', cow_controller_1.cowController.getAllcows);
router.get('/:id', cow_controller_1.cowController.getSinglecow);
router.patch('/:id', cow_controller_1.cowController.updatecow);
router.delete('/:id', cow_controller_1.cowController.deletecow);
exports.cowRoutes = router;
