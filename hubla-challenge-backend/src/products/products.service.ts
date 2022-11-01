import { Injectable } from '@nestjs/common';
import { AppLogger } from '~/app.logger';
import { ProductsRepository } from '~/products/products.repository';

@Injectable()
export class ProductsService {
  constructor(
    private readonly logger: AppLogger,
    private readonly productRepository: ProductsRepository
  ) {
    this.logger.setContext(ProductsService.name);
  }

  async findByProductName(name: string) {
    return await this.productRepository.findUnique({
      where: {
        name
      }
    });
  }
}
