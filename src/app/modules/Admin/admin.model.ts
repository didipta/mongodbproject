import { Schema } from 'mongoose';
import { ARole, AdminrModel, IAdmin } from './admin.interface';
import { model } from 'mongoose';
import bcrypt from 'bcrypt';
import config from '../../../config';

const adminSchema = new Schema<IAdmin, AdminrModel>(
  {
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ARole,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (_doc, ret) {
        delete ret.password;
      },
    },
  }
);

adminSchema.statics.isAdminExist = async function (
  phoneNumber: string
): Promise<Pick<IAdmin, 'phoneNumber' | 'password' | 'role'> | null> {
  return await Admin.findOne(
    { phoneNumber },
    { phoneNumber: 1, password: 1, role: 1 }
  );
};

adminSchema.statics.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(givenPassword, savedPassword);
};

adminSchema.pre('save', async function (next) {
  // hashing user password
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt));
  next();
});

export const Admin = model<IAdmin, AdminrModel>('Admin', adminSchema);
