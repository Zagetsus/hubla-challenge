import { BadRequestException, Injectable } from '@nestjs/common';
import {
  ParsingFileResponse,
  ParsingParamsParams,
  ValidationDataFileIdentificationsResponse,
  ValidationDataFileResponse
} from '~/files/interfaces';
import * as readline from 'readline';
import * as fs from 'fs';
import { join } from 'path';
import * as events from 'events';
import { AppLogger } from '~/app.logger';
import { TypesTransactionsService } from '~/types-transactions/types-transactions.service';
import { UsersService } from '~/users/users.service';
import { ProductsService } from '~/products/products.service';
import { capitalizeWords } from '~/common/utils';
import { ErrorProps } from '~/common/interfaces';

@Injectable()
export class FilesService {
  constructor(
    private readonly logger: AppLogger,
    private readonly userService: UsersService,
    private readonly typeTransactionService: TypesTransactionsService,
    private readonly productService: ProductsService
  ) {
    this.logger.setContext(FilesService.name);
  }

  createErrorsData(params): ErrorProps[] {
    const arrayOfProperty = Object.entries(params);

    return arrayOfProperty.reduce((accumulate: ErrorProps[], current) => {
      if (!current[1]) {
        accumulate.push({
          property: current[0],
          message: `The ${current[0]} entered is invalid`
        });
      }
      return accumulate;
    }, [] as ErrorProps[]);
  }

  async parsingFile({
    path
  }: ParsingParamsParams): Promise<ParsingFileResponse[]> {
    try {
      const normalizedData = [] as ParsingFileResponse[];
      const pathJoin = join(process.cwd(), path);

      const fileStream = fs.createReadStream(pathJoin, { encoding: 'utf-8' });
      const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
      });

      rl.on('line', line => {
        const type = Number(line.slice(0, 1));
        const product = line.slice(26, 56).trimEnd();
        const price = Number(line.slice(56, 66)) / 100;
        const seller = capitalizeWords(line.slice(66, 86));
        const createdAt = new Date(line.slice(1, 26));

        normalizedData.push({
          type,
          product,
          price,
          seller,
          createdAt
        });
      });

      await events.once(rl, 'close');

      return normalizedData;
    } catch (err) {
      this.logger.fail({
        category: 'FILES_SERVICE_ERROR',
        error: err.message
      });

      throw new BadRequestException(err.message);
    } finally {
      fs.unlinkSync(path);
    }
  }

  async validationDataFile({
    path
  }: ParsingParamsParams): Promise<ValidationDataFileResponse[]> {
    const dataFile = await this.parsingFile({ path });
    const response: ValidationDataFileResponse[] =
      [] as ValidationDataFileResponse[];

    for (const file of dataFile) {
      const type = await this.typeTransactionService.findByType(file.type);
      const seller = await this.userService.getManyUser({
        name: file.seller
      });
      const product = await this.productService.findByProductName(file.product);

      const hasSeller = !!seller.length;

      const identifications: ValidationDataFileIdentificationsResponse = {
        typeTransactionId: type ? type.id : null,
        sellerId: hasSeller ? seller[0].id : null,
        productId: product ? product.id : null
      };
      const validatedData: ValidationDataFileResponse = {
        type: file.type,
        seller: file.seller,
        product: file.product,
        price: file.price,
        createdAt: file.createdAt,
        identifications
      };

      const errors = this.createErrorsData(identifications);
      const hasErrors = !!errors.length;

      if (hasErrors) validatedData.errors = errors;

      response.push(validatedData);
    }

    return response;
  }
}
