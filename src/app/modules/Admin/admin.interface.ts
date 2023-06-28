import { Model } from 'mongoose';

type IName = {
  firstName: string;
  lastName: string;
};

export type AdminRole = 'ADMIN';

export const ARole: AdminRole[] = ['ADMIN'];

export type IAdmin = {
  phoneNumber: string;
  role: AdminRole;
  password: string;
  name: IName;
  firstName: string;
  lastName: string;
  address: string;
};

export type AdminrModel = {
  isAdminExist(
    // eslint-disable-next-line no-unused-vars
    phoneNumber: string
  ): Promise<Pick<IAdmin, 'phoneNumber' | 'password' | 'role'>>;
  isPasswordMatched(
    // eslint-disable-next-line no-unused-vars
    givenPassword: string,
    // eslint-disable-next-line no-unused-vars
    savedPassword: string
  ): Promise<boolean>;
} & Model<IAdmin>;
