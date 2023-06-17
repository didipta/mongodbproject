import { z } from 'zod';
import { Role } from './user.contact';

const uservalidation = z.object({
  body: z.object({
    phoneNumber: z
      .string({
        required_error: 'Phone number is required',
      })
      .min(11)
      .max(11),
    role: z.enum([...Role] as [string, ...string[]]),
    password: z
      .string({
        required_error: 'Password is required',
      })
      .min(6)
      .max(20),
    name: z.object({
      firstName: z
        .string({
          required_error: 'First name is required',
        })
        .min(2)
        .max(20),
      lastName: z
        .string({
          required_error: 'Last name is required',
        })
        .min(2)
        .max(20),
    }),
    address: z
      .string({
        required_error: 'Address is required',
      })
      .min(2)
      .max(20),
    budget: z
      .number({
        required_error: 'Budget is required',
      })
      .min(0),
    income: z
      .number({
        required_error: 'Income is required',
      })
      .min(0),
  }),
});

export default uservalidation;
