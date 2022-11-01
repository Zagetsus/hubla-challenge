import { AmountsResponseDTO } from '~/extracts/dto';
import { ApiProperty } from '@nestjs/swagger';
import { TransactionsResponseDTO } from '~/extracts/dto/transactions/transactions-response.dto';

export class TransactionsDataResponseDTO {
  @ApiProperty({
    type: String,
    description: 'Transaction date.',
    example: '2022-10-24',
    required: true
  })
  date: string;

  @ApiProperty({
    type: AmountsResponseDTO,
    description: 'Transactions balances.',
    required: true
  })
  amounts: AmountsResponseDTO;

  @ApiProperty({
    type: [TransactionsResponseDTO],
    description: 'List of date transactions.',
    required: true
  })
  transactions: TransactionsResponseDTO[];
}
