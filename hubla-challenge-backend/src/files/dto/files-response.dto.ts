import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { FilesIdentificationsResponseDTO } from '~/files/dto/files-identifications-response.dto';
import { ErrorProps } from '~/common/interfaces';
import { ErrorsResponseDTO } from '~/common/dto';
import { ValidationDataFileResponse } from '~/files/interfaces';
import { snakeKeys } from '~/common/utils';

export class FilesResponseDTO {
  @ApiProperty({
    type: Number,
    description: 'Transfer type.',
    example: 1,
    required: true
  })
  type: number;

  @ApiProperty({
    type: String,
    description: 'Name of the person who made the sale.',
    example: 'Jose Carlos',
    required: true
  })
  seller: string;

  @ApiProperty({
    type: String,
    description: 'Product name.',
    example: 'CURSO DE BEM-ESTAR',
    required: true
  })
  product: string;

  @ApiProperty({
    type: Number,
    description: 'Amount charged for the row.',
    example: 127.5,
    required: true
  })
  price: number;

  @ApiProperty({
    name: 'created_at',
    type: Date,
    description: 'Date of purchase.',
    example: '2022-01-15T22:20:30.000Z',
    required: true
  })
  @Expose({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty({
    type: FilesIdentificationsResponseDTO,
    description: 'Transfer data identifiers in the database.',
    required: true
  })
  identifications: FilesIdentificationsResponseDTO;

  @ApiPropertyOptional({
    type: [ErrorsResponseDTO],
    description: 'Transaction error list.'
  })
  errors?: ErrorProps[];

  static factory(transactions: ValidationDataFileResponse[]) {
    return transactions.map(transaction => snakeKeys(transaction));
  }
}
