import { Injectable } from '@nestjs/common';
import { Prisma, User as UserModel } from '@prisma/client';
import { AppLogger } from '~/app.logger';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly logger: AppLogger,
    private readonly userRepository: UsersRepository
  ) {
    this.logger.setContext(UsersService.name);
  }

  async getUser(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
    const user: UserModel | null = await this.userRepository.findUnique({
      where: userWhereUniqueInput
    });

    return user;
  }

  async getManyUser(userWhereInput: Prisma.UserWhereInput) {
    const user: UserModel[] = await this.userRepository.getAll({
      where: userWhereInput
    });

    return user;
  }
}
