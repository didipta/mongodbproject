'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const zod_1 = require('zod');
const user_contact_1 = require('./user.contact');
const uservalidation = zod_1.z.object({
  body: zod_1.z.object({
    phoneNumber: zod_1.z
      .string({
        required_error: 'Phone number is required',
      })
      .min(11)
      .max(11),
    role: zod_1.z.enum([...user_contact_1.Role]),
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
      .max(20),
    budget: zod_1.z
      .number({
        required_error: 'Budget is required',
      })
      .min(0),
    income: zod_1.z
      .number({
        required_error: 'Income is required',
      })
      .min(0),
  }),
});
exports.default = uservalidation;
