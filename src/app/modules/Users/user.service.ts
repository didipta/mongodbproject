import { IUser } from './User.interface';
import { User } from './User.model';

const createUser = async (payload: IUser): Promise<IUser | null> => {
  const result = await User.create(payload);
  return result;
};

export const UserService = {
  createUser,
};
