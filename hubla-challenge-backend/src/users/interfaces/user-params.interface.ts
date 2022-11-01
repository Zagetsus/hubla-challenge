import { UserTypeEnum } from '@prisma/client';

export interface UserParams {
  name: string;
  email: string;
  password: string;
  userType: UserTypeEnum;
  imageUrl?: string;
}
