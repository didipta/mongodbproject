type IName = {
  firstName: string;
  lastName: string;
};

export type IRole = 'SELLER' | 'BUYER';

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
