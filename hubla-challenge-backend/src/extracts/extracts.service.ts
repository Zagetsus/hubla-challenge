import { Injectable } from '@nestjs/common';
import { ExtractsRepository } from '~/extracts/extracts.repository';
import { AppLogger } from '~/app.logger';
import { format } from 'date-fns';
import {
  ExtractAmountsResponse,
  TransactionsByDateParams,
  PeriodsResponse,
  TransactionsDataByDate,
  TransactionsByDateResponse,
  BalanceResponse,
  CreateManyTransactionsParams,
  CreateManyTransactionsResponse,
  CreateManyTransactionsDataResponse
} from '~/extracts/interface';
import { ErrorProps } from '~/common/interfaces';
import { UnexpectedError } from '~/common/errors';

@Injectable()
export class ExtractsService {
  constructor(
    private readonly extractRepository: ExtractsRepository,
    private readonly logger: AppLogger
  ) {
    this.logger.setContext(ExtractsService.name);
  }

  private accumulateValues(attr: string, list) {
    return list.reduce((acc, amount) => {
      const total = Number(amount[attr] || 0);
      return acc + total;
    }, 0);
  }

  private static createErrorsData(params): ErrorProps[] {
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

  async createManyTransactions(
    params: CreateManyTransactionsParams
  ): Promise<CreateManyTransactionsResponse> {
    const { body, userId } = params;

    let hasErrors = false;

    body.map(item => {
      const errors = ExtractsService.createErrorsData(body);
      const hasItemError = !!errors.length;
      hasErrors = !!errors.length;

      if (hasItemError) item.errors = errors;
    });

    if (hasErrors) {
      const errorLoggerMessage = 'Missing some row identifiers.';
      const errorMessage = 'MISSING_TRANSACTION_IDENTIFIERS';

      this.logger.fail({
        category: 'EXTRACTS_SERVICE_ERROR',
        error: errorLoggerMessage
      });

      throw new UnexpectedError(errorMessage);
    }

    const formatData: CreateManyTransactionsDataResponse[] = body.map(
      transaction => ({
        transactionTypeId: transaction.identifications.typeTransactionId ?? '',
        sellerId: transaction.identifications.sellerId ?? '',
        productId: transaction.identifications.productId ?? '',
        price: transaction.price,
        creatorId: String(userId),
        createdAt: transaction.createdAt
      })
    );

    await this.extractRepository.createManyTransactions({ data: formatData });

    return {
      message: 'Transactions created successfully!',
      transactions: formatData
    };
  }

  async getExtractBalance(): Promise<BalanceResponse> {
    const balance = await this.extractRepository.getExtractBalance();
    const entries = this.accumulateValues('entries', balance);
    const outputs = this.accumulateValues('outputs', balance);

    return {
      entries,
      outputs
    };
  }

  async getTransactionsByDay(
    params: TransactionsByDateParams
  ): Promise<TransactionsByDateResponse> {
    const { page = 1, take = 4 } = params;
    const results = await this.extractRepository.getTotalTransactionsByDay();
    const skip = (page - 1) * take;
    const totalPages = Math.ceil(results / take) ?? 0;

    const dates: PeriodsResponse[] =
      await this.extractRepository.getPeriodOfTheExtract({
        take,
        skip
      });
    const transactionsByDate = [] as TransactionsDataByDate[];

    for (const date of dates) {
      const dateFormatted = format(date.period, 'yyyy-MM-dd');
      const dateFormattedStart = new Date(`${dateFormatted}T00:00:00Z`);
      const dateFormattedEnd = new Date(`${dateFormatted}T23:59:59Z`);

      const amountsByDate = await this.extractRepository.getTotalOfDay({
        startDate: dateFormattedStart,
        endDate: dateFormattedEnd
      });

      const outbound = this.accumulateValues('outbound', amountsByDate);
      const inbound = this.accumulateValues('inbound', amountsByDate);

      const amounts: ExtractAmountsResponse = { inbound, outbound };

      const transactions = await this.extractRepository.getTransactions({
        date: dateFormatted
      });

      const response: TransactionsDataByDate = {
        date: dateFormatted,
        amounts,
        transactions
      };

      transactionsByDate.push(response);
    }

    return {
      transactionsByDate,
      totalPages,
      results
    };
  }
}
