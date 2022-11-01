import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from '~/common/services';
import { AppLogger } from '~/app.logger';
import { UsersRepository } from '~/users/users.repository';

@Module({
  providers: [UsersService, UsersRepository, AppLogger, PrismaService],
  exports: [UsersService]
})
export class UsersModule {}
