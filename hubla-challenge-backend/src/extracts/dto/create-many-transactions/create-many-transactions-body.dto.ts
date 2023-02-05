import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Expose, Type } from 'class-transformer';
import { CreateManyTransactionsIdentificationsDTO } from '~/extracts/dto/create-many-transactions/create-many-transactions-identifications.dto';

export class CreateManyTransactionsBodyDTO {
  @ApiProperty({
    type: Number,
    description: 'Transaction type.',
    example: 1,
    required: true
  })
  @IsNotEmpty()
  @IsNumber()
  type: number;

  @ApiProperty({
    type: String,
    description: 'Name of the seller responsible for the row.',
    example: 'Jose Carlos',
    required: true
  })
  @IsNotEmpty()
  @IsString()
  seller: string;

  @ApiProperty({
    type: String,
    description: `Product's name.`,
    example: 'CURSO DE BEM-ESTAR',
    required: true
  })
  @IsNotEmpty()
  @IsString()
  product: string;

  @ApiProperty({
    type: Number,
    description: 'Product price on row.',
    example: 127.5,
    required: true
  })
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({
    name: 'created_at',
    type: Date,
    description: 'Transaction creation date.',
    example: '2022-01-15T22:20:30.000Z',
    required: true
  })
  @Expose({ name: 'created_at' })
  @Type(() => Date)
  @IsNotEmpty()
  createdAt: Date;

  @ApiProperty({
    type: CreateManyTransactionsIdentificationsDTO,
    description: 'Transaction identifier group.',
    required: true
  })
  @Expose()
  identifications: CreateManyTransactionsIdentificationsDTO;
}
