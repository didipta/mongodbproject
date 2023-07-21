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
exports.UserService = void 0;
const paginationHelper_1 = require("../../../shared/paginationHelper");
const User_model_1 = require("./User.model");
const createUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield User_model_1.User.create(payload);
    return result;
});
const getAlluser = (paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit, page, skip } = paginationHelper_1.paginationHelpers.calculatePagination(paginationOptions);
    const result = yield User_model_1.User.find({}).skip(skip).limit(limit);
    const total = yield User_model_1.User.countDocuments();
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
const getSingleuser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield User_model_1.User.findById(id);
    return result;
});
const getmyprofile = (phone) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield User_model_1.User.findOne({ phoneNumber: phone });
    return result;
});
const updateuser = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield User_model_1.User.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
const deleteuser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield User_model_1.User.findByIdAndDelete(id);
    return result;
});
exports.UserService = {
    createUser,
    getSingleuser,
    updateuser,
    deleteuser,
    getAlluser,
    getmyprofile,
};
