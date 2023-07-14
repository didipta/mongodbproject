'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const zod_1 = require('zod');
const admin_interface_1 = require('./admin.interface');
const adminvalidation = zod_1.z.object({
  body: zod_1.z.object({
    phoneNumber: zod_1.z
      .string({
        required_error: 'Phone number is required',
      })
      .min(11)
      .max(11),
    role: zod_1.z.enum([...admin_interface_1.ARole]),
    password: zod_1.z
      .string({
        required_error: 'Password is required',
      })
      .min(6)
      .max(20),
    name: zod_1.z.object({
      firstName: zod_1.z
        .string({
          required_error: 'First name is required',
        })
        .min(2)
        .max(20),
      lastName: zod_1.z
        .string({
          required_error: 'Last name is required',
        })
        .min(2)
        .max(20),
    }),
    address: zod_1.z
      .string({
        required_error: 'Address is required',
      })
      .min(2)
      .max(200),
  }),
});
exports.default = adminvalidation;
