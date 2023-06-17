import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../shared/pagination copy';
import { paginationHelpers } from '../../../shared/paginationHelper';
import { ICow } from './cow.interface';
import { Cow } from './cow.model';

const createCow = async (payload: ICow): Promise<ICow | null> => {
  const result = await Cow.create(payload);
  return result;
};

const getAllcows = async (
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<ICow[]>> => {
  const { limit, page, skip } =
    paginationHelpers.calculatePagination(paginationOptions);

  const result = await Cow.find({}).skip(skip).limit(limit);

  const total = await Cow.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSinglecow = async (id: string): Promise<ICow | null> => {
  const result = await Cow.findById(id);
  return result;
};

const deletecow = async (id: string): Promise<ICow | null> => {
  const result = await Cow.findByIdAndDelete(id);
  return result;
};

export const cowService = {
  createCow,
  getAllcows,
  getSinglecow,
  deletecow,
};
