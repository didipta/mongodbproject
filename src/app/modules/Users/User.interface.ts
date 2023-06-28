import { Model } from 'mongoose';

type IName = {
  firstName: string;
  lastName: string;
};

export type IRole = 'SELLER' | 'BUYER' | 'ADMIN';

export type IUser = {
  phoneNumber: string;
  role: IRole;
  password: string;
  name: IName;
  firstName: string;
  lastName: string;
  address: string;
  budget: number;
  income: number;
};

export type UserModel = {
  isUserExist(
    // eslint-disable-next-line no-unused-vars
    phoneNumber: string
  ): Promise<Pick<IUser, 'phoneNumber' | 'password' | 'role'>>;
  isPasswordMatched(
    // eslint-disable-next-line no-unused-vars
    givenPassword: string,
    // eslint-disable-next-line no-unused-vars
    savedPassword: string
  ): Promise<boolean>;
} & Model<IUser>;
