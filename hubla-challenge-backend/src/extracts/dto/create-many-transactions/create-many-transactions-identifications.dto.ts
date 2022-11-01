import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class CreateManyTransactionsIdentificationsDTO {
  @ApiProperty({
    name: 'type_transaction_id',
    type: String,
    description: 'Transaction type record identifier.',
    example: '55e2315c-9998-42b9-9616-362abe0ba8d7',
    required: true
  })
  @Expose({ name: 'type_transaction_id' })
  @IsOptional()
  typeTransactionId: string | null;

  @ApiProperty({
    name: 'seller_id',
    type: String,
    description: 'Transaction seller record identifier.',
    example: '69451838-785c-4003-8083-bf8d0edc7176',
    required: true
  })
  @Expose({ name: 'seller_id' })
  @IsOptional()
  sellerId: string | null;

  @ApiProperty({
    name: 'product_id',
    type: String,
    description: 'Transaction product record identifier.',
    example: '21214c45-fef0-4351-81b8-525d66ec9452',
    required: true
  })
  @Expose({ name: 'product_id' })
  @IsOptional()
  productId: string | null;
}
