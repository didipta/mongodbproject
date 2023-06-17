import { z } from 'zod';
import { Role } from './user.contact';

const uservalidation = z.object({
  phoneNumber: z.string().min(11).max(11),
  role: z.enum([...Role] as [string, ...string[]]).optional(),
  password: z.string().min(6),
  name: z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
  }),
  address: z.string(),
  budget: z.number().positive(),
  income: z.number().positive(),
});

export default uservalidation;
