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
