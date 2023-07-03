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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const admin_model_1 = require("../Admin/admin.model");
const config_1 = __importDefault(require("../../../config"));
const jwtHelpers_1 = require("../../Healper/jwtHelpers");
const User_model_1 = require("../Users/User.model");
const loginAdmin = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { phoneNumber, password } = payload;
    const isAdminExist = yield admin_model_1.Admin.isAdminExist(phoneNumber);
    if (!isAdminExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User does not exist');
    }
    if (isAdminExist.password &&
        !(yield admin_model_1.Admin.isPasswordMatched(password, isAdminExist.password))) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'Password is incorrect');
    }
    const { phoneNumber: phone, role } = isAdminExist;
    const accessToken = jwtHelpers_1.jwtHelpers.createToken({ phone, role }, config_1.default.jwt_secret, config_1.default.jwt_expires_in);
    const refreshToken = jwtHelpers_1.jwtHelpers.createToken({ phone, role }, config_1.default.jwt_refresh_secret, config_1.default.jwt_refresh_expires_in);
    return {
        accessToken,
        refreshToken,
    };
});
const loginuser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { phoneNumber, password } = payload;
    const isuserExist = yield User_model_1.User.isUserExist(phoneNumber);
    if (!isuserExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User does not exist');
    }
    if (isuserExist.password &&
        !(yield User_model_1.User.isPasswordMatched(password, isuserExist.password))) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'Password is incorrect');
    }
    const { phoneNumber: phone, role } = isuserExist;
    const accessToken = jwtHelpers_1.jwtHelpers.createToken({ phone, role }, config_1.default.jwt_secret, config_1.default.jwt_expires_in);
    const refreshToken = jwtHelpers_1.jwtHelpers.createToken({ phone, role }, config_1.default.jwt_refresh_secret, config_1.default.jwt_refresh_expires_in);
    return {
        accessToken,
        refreshToken,
    };
});
const refreshToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    //verify token
    // invalid token - synchronous
    let verifiedToken = null;
    try {
        verifiedToken = jwtHelpers_1.jwtHelpers.verifyToken(token, config_1.default.jwt_refresh_secret);
    }
    catch (err) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, 'Invalid Refresh Token');
    }
    const { phone } = verifiedToken;
    // tumi delete hye gso  kintu tumar refresh token ase
    // checking deleted user's refresh token
    const isUserExist = yield User_model_1.User.isUserExist(phone);
    if (!isUserExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User does not exist');
    }
    //generate new token
    const newAccessToken = jwtHelpers_1.jwtHelpers.createToken({
        id: isUserExist.phoneNumber,
        role: isUserExist.role,
    }, config_1.default.jwt_secret, config_1.default.jwt_expires_in);
    return {
        accessToken: newAccessToken,
    };
});
exports.authService = {
    loginAdmin,
    loginuser,
    refreshToken,
};
