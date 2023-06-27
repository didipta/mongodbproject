import { IRole } from '../Users/User.interface';

type IName = {
  firstName: string;
  lastName: string;
};

export type IAdmin = {
  phoneNumber: string;
  role: IRole;
  password: string;
  name: IName;
  firstName: string;
  lastName: string;
  address: string;
};
