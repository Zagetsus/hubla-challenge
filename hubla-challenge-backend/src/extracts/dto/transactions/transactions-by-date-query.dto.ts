import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class TransactionsByDateQueryDTO {
  @ApiProperty({
    type: Number,
    description: 'Page number.',
    name: 'page',
    minimum: 1,
    example: 1
  })
  @Type(() => Number)
  @Min(1)
  @IsNumber()
  @IsNotEmpty()
  page: number;

  @ApiPropertyOptional({
    type: Number,
    description: 'Transaction limit.',
    minimum: 1,
    example: 1
  })
  @Type(() => Number)
  @IsOptional()
  @Min(0)
  @IsNumber()
  limit: number;
}
