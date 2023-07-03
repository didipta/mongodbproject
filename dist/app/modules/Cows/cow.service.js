"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cowService = void 0;
const paginationHelper_1 = require("../../../shared/paginationHelper");
const cow_model_1 = require("./cow.model");
const createCow = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cow_model_1.Cow.create(payload);
    return result;
});
const getAllcows = (paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit, page, skip } = paginationHelper_1.paginationHelpers.calculatePagination(paginationOptions);
    const result = yield cow_model_1.Cow.find({}).skip(skip).limit(limit);
    const total = yield cow_model_1.Cow.countDocuments();
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
const getSinglecow = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cow_model_1.Cow.findById(id);
    return result;
});
const updatecow = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cow_model_1.Cow.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const deletecow = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cow_model_1.Cow.findByIdAndDelete(id);
    return result;
});
exports.cowService = {
    createCow,
    getAllcows,
    getSinglecow,
    updatecow,
    deletecow,
};
