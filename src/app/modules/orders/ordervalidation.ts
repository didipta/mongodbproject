import { z } from 'zod';

const ordervalidation = z.object({
  body: z.object({
    Cow: z.string({
      required_error: 'Cow is required',
    }),
    buyer: z.string({
      required_error: 'Buyer is required',
    }),
  }),
});

export default ordervalidation;
