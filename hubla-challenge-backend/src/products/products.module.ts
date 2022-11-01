import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { AppLogger } from '~/app.logger';
import { PrismaService } from '~/common/services';
import { ProductsRepository } from '~/products/products.repository';

@Module({
  providers: [ProductsService, ProductsRepository, AppLogger, PrismaService],
  exports: [ProductsService]
})
export class ProductsModule {}
