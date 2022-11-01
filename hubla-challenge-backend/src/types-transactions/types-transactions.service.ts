import { Injectable } from '@nestjs/common';
import { TypesTransactionsRepository } from '~/types-transactions/types-transactions.repository';
import { AppLogger } from '~/app.logger';

@Injectable()
export class TypesTransactionsService {
  constructor(
    private readonly typeTransaction: TypesTransactionsRepository,
    private readonly logger: AppLogger
  ) {
    this.logger.setContext(TypesTransactionsService.name);
  }

  async findByType(type: number) {
    return await this.typeTransaction.findUnique({
      where: {
        type
      }
    });
  }
}
