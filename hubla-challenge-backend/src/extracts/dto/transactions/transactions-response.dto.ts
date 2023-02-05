import { NatureTransactionEnum } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class TransactionsResponseDTO {
  @ApiProperty({
    type: String,
    description: 'Name of the product sold in the row.',
    example: 'CURSO DE BEM-ESTAR',
    required: true
  })
  product: string;

  @ApiProperty({
    type: String,
    description: 'Transaction seller name.',
    example: 'Celso De Melo',
    required: true
  })
  seller: string;

  @ApiProperty({
    name: 'seller_image',
    type: String,
    description: 'Seller profile picture.',
    example: 'https://cdn.fakercloud.com/avatars/faisalabid_128.jpg',
    required: true
  })
  @Expose({ name: 'seller_image' })
  sellerImage: string;

  @ApiProperty({
    type: String,
    description: 'Description of row type.',
    example: 'Comissão recebida',
    required: true
  })
  type: string;

  @ApiProperty({
    type: String,
    description: 'Nature of row.',
    example: 'ENTRY',
    required: true
  })
  nature: NatureTransactionEnum;

  @ApiProperty({
    type: Number,
    description: 'Transaction amount.',
    example: 434.33,
    required: true
  })
  amount: string;

  @ApiProperty({
    name: 'created_at',
    type: Date,
    description: 'Date the row took place.',
    example: '2022-10-24T02:33:03.901Z',
    required: true
  })
  @Expose({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty({
    name: 'updated_at',
    type: Date,
    description: 'Transaction update date.',
    example: '2022-10-28T06:23:02.577Z',
    required: true
  })
  @Expose({ name: 'updated_at' })
  updatedAt: Date;
}
