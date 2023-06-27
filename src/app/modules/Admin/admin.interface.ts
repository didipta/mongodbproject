type IName = {
  firstName: string;
  lastName: string;
};

type IRole = 'ADMIN';
export const ARole: IRole[] = ['ADMIN'];

export type IAdmin = {
  phoneNumber: string;
  role: IRole;
  password: string;
  name: IName;
  firstName: string;
  lastName: string;
  address: string;
};
