'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const zod_1 = require('zod');
const cow_contact_1 = require('./cow.contact');
// Define the schema for validation
const cowvalidation = zod_1.z.object({
  body: zod_1.z.object({
    name: zod_1.z.string({
      required_error: 'Name is required',
    }),
    age: zod_1.z
      .number({
        required_error: 'Age is required',
      })
      .positive(),
    price: zod_1.z
      .number({
        required_error: 'Price is required',
      })
      .positive(),
    location: zod_1.z.enum([...cow_contact_1.location]),
    breed: zod_1.z.enum([...cow_contact_1.breed]),
    weight: zod_1.z
      .number({
        required_error: 'Weight is required',
      })
      .positive(),
    label: zod_1.z.enum([...cow_contact_1.label]),
    category: zod_1.z.enum([...cow_contact_1.category]),
    seller: zod_1.z
      .string({
        required_error: 'Seller is required',
      })
      .optional(),
  }),
});
exports.default = cowvalidation;
