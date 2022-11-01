import { ApiProperty } from '@nestjs/swagger';
import { CreateManyTransactionsDataResponseDTO } from '~/extracts/dto/create-many-transactions/create-many-transactions-data-response.dto';
import { CreateManyTransactionsResponse } from '~/extracts/interface';
import { snakeKeys } from '~/common/utils';

export class CreateManyTransactionsResponseDTO {
  @ApiProperty({
    type: String,
    description:
      'Informational message about the transaction creation operation.',
    example: 'Transactions created successfully!',
    required: true
  })
  message: string;

  @ApiProperty({
    type: [CreateManyTransactionsDataResponseDTO],
    description:
      'Informational message about the transaction creation operation.',
    required: true
  })
  transactions: CreateManyTransactionsDataResponseDTO[];

  static factory(params: CreateManyTransactionsResponse) {
    const { message, transactions } = params;

    return {
      message,
      transactions: transactions.map(snakeKeys)
    };
  }
}
