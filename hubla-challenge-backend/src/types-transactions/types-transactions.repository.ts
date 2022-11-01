import { Injectable } from '@nestjs/common';
import { PrismaService } from '~/common/services';
import {
  Prisma,
  TypeTransaction as TypeTransactionModel
} from '@prisma/client';

@Injectable()
export class TypesTransactionsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findUnique(params: {
    where: Prisma.TypeTransactionWhereUniqueInput;
  }): Promise<TypeTransactionModel | null> {
    const { where } = params;

    return await this.prismaService.typeTransaction.findUnique({
      where
    });
  }
}
