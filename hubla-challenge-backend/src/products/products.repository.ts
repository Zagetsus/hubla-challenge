import { Injectable } from '@nestjs/common';
import { PrismaService } from '~/common/services';
import { Prisma, Product as ProductModel } from '@prisma/client';

@Injectable()
export class ProductsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findUnique(params: {
    where: Prisma.ProductWhereUniqueInput;
    include?: Prisma.ProductInclude;
  }): Promise<ProductModel | null> {
    const { where, include } = params;

    return await this.prismaService.product.findUnique({
      where,
      include
    });
  }
}
