import { z } from 'zod';
import { breed, category, label, location } from './cow.contact';

// Define the schema for validation
const cowvalidation = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    age: z
      .number({
        required_error: 'Age is required',
      })
      .positive(),
    price: z
      .number({
        required_error: 'Price is required',
      })
      .positive(),
    location: z.enum([...location] as [string, ...string[]]),
    breed: z.enum([...breed] as [string, ...string[]]),
    weight: z
      .number({
        required_error: 'Weight is required',
      })
      .positive(),
    label: z.enum([...label] as [string, ...string[]]),
    category: z.enum([...category] as [string, ...string[]]),
    seller: z
      .string({
        required_error: 'Seller is required',
      })
      .optional(),
  }),
});

export default cowvalidation;
