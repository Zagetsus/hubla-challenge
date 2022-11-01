import { ApiProperty } from '@nestjs/swagger';

export class CreateManyTransactionsDataResponseDTO {
  @ApiProperty({
    name: 'transaction_type_id',
    type: String,
    description: 'Transaction type record identifier.',
    example: '55e2315c-9998-42b9-9616-362abe0ba8d7',
    required: true
  })
  transactionTypeId: string;

  @ApiProperty({
    name: 'seller_id',
    type: String,
    description: 'Transaction seller record identifier.',
    example: '69451838-785c-4003-8083-bf8d0edc7176',
    required: true
  })
  sellerId: string;

  @ApiProperty({
    name: 'product_id',
    type: String,
    description: 'Transaction product record identifier.',
    example: '21214c45-fef0-4351-81b8-525d66ec9452',
    required: true
  })
  productId: string;

  @ApiProperty({
    type: Number,
    description: 'Product price on transaction.',
    example: 127.5,
    required: true
  })
  price: number;

  @ApiProperty({
    name: 'creator_id',
    type: String,
    description: 'Transaction creator record identifier.',
    example: '69451838-785c-4003-8083-bf8d0edc7176',
    required: true
  })
  creatorId: string;

  @ApiProperty({
    name: 'created_at',
    type: Date,
    description: 'Transaction creation date.',
    example: '2022-01-15T22:20:30.000Z',
    required: true
  })
  createdAt: Date;
}
