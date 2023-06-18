"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const ordervalidation = zod_1.z.object({
    body: zod_1.z.object({
        Cow: zod_1.z.string({
            required_error: 'Cow is required',
        }),
        buyer: zod_1.z.string({
            required_error: 'Buyer is required',
        }),
    }),
});
exports.default = ordervalidation;
