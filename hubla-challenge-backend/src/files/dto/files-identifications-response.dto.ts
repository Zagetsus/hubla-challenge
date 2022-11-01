import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class FilesIdentificationsResponseDTO {
  @ApiProperty({
    name: 'type_transaction_id',
    description: 'Transaction type identifier.',
    example: '36622df3-5946-4eb2-9fd1-bbfc8a2e1977',
    required: true
  })
  @Expose({ name: 'type_transaction_id' })
  typeTransactionId: string | null;

  @ApiProperty({
    name: 'seller_id',
    description: 'Transaction seller identifier.',
    example: '07866110-9324-4a44-bef0-95ded533191a',
    required: true
  })
  @Expose({ name: 'seller_id' })
  sellerId: string | null;

  @ApiProperty({
    name: 'product_id',
    description: 'Identifier of the sold product.',
    example: null,
    required: true
  })
  @Expose({ name: 'product_id' })
  productId: string | null;
}
