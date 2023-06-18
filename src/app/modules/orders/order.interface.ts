import { Types } from 'mongoose';
import { ICow } from '../Cows/cow.interface';
import { IUser } from '../Users/User.interface';

export type Iorder = {
  Cow: Types.ObjectId | ICow;
  buyer: Types.ObjectId | IUser;
};
