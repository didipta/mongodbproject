import { Schema, model } from 'mongoose';
import { IUser } from './User.interface';
import { Role } from './user.contact';

const userSchema = new Schema<IUser>(
  {
    phoneNumber: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: Role,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    address: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    income: {
      type: Number,
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

export const User = model<IUser>('User', userSchema);
