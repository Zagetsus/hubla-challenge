import { Module } from '@nestjs/common';
import { TypesTransactionsService } from './types-transactions.service';
import { PrismaService } from '~/common/services';
import { AppLogger } from '~/app.logger';
import { TypesTransactionsRepository } from '~/types-transactions/types-transactions.repository';

@Module({
  providers: [
    TypesTransactionsService,
    PrismaService,
    AppLogger,
    TypesTransactionsRepository
  ],
  exports: [TypesTransactionsService]
})
export class TypesTransactionsModule {}
