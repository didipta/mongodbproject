import { Schema, model } from 'mongoose';
import { Iorder } from './order.interface';

const userSchema = new Schema<Iorder>(
  {
    Cow: {
      type: Schema.Types.ObjectId,
      ref: 'Cow',
      required: true,
    },
    buyer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Order = model<Iorder>('Order', userSchema);
