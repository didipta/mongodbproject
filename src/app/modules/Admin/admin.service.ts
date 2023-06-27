import { IAdmin } from './admin.interface';
import { Admin } from './admin.model';

const createUser = async (payload: IAdmin): Promise<IAdmin | null> => {
  const result = await Admin.create(payload);
  return result;
};

export const Adminservice = {
  createUser,
};
