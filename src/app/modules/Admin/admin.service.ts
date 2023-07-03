import { IAdmin } from './admin.interface';
import { Admin } from './admin.model';

const createUser = async (payload: IAdmin): Promise<IAdmin | null> => {
  const result = await Admin.create(payload);
  return result;
};
const getSingleadmin = async (id: string): Promise<IAdmin | null> => {
  const result = await Admin.findById(id);
  return result;
};

const getmyprofile = async (phone: string): Promise<IAdmin | null> => {
  const result = await Admin.findOne({ phoneNumber: phone });
  return result;
};
export const Adminservice = {
  createUser,
  getSingleadmin,
  getmyprofile,
};
