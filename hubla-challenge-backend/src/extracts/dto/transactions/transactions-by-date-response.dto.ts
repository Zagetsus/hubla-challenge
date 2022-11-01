import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { MetaResponseDTO } from '~/extracts/dto/transactions';
import { TransactionsDataResponseDTO } from '~/extracts/dto/transactions/transactions-data-response.dto';
import { MetaDataResponse, TransactionsDataByDate } from '~/extracts/interface';
import { snakeKeys } from '~/common/utils';

export class TransactionsByDateResponseDTO {
  @ApiProperty({
    name: 'transactions_by_date',
    type: [TransactionsDataResponseDTO],
    description: 'List of dates with transactions',
    required: true
  })
  @Expose({ name: 'transactions_by_date' })
  transactionsByDate: TransactionsDataResponseDTO[];

  @ApiProperty({
    type: MetaResponseDTO,
    description: 'Additional data regarding the listing of transaction dates.',
    required: true
  })
  meta: MetaResponseDTO;

  static factory(params: {
    transactions: TransactionsDataByDate[];
    meta: MetaDataResponse;
  }) {
    const { transactions, meta } = params;
    const data = transactions.map(transaction => snakeKeys(transaction));
    const metaData = snakeKeys(meta);

    return {
      transactions_by_date: data,
      meta: metaData
    };
  }
}
