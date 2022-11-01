import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class MetaResponseDTO {
  @ApiProperty({
    type: Number,
    description: 'Total result of transaction dates.',
    example: 90,
    required: true
  })
  results: number;

  @ApiProperty({
    name: 'current_page',
    type: Number,
    description: 'Current page of transaction dates.',
    example: 1,
    required: true
  })
  @Expose({ name: 'current_page' })
  currentPage: number;

  @ApiProperty({
    name: 'total_pages',
    type: Number,
    description: 'Total pages of transaction dates.',
    example: 23,
    required: true
  })
  @Expose({ name: 'total_pages' })
  totalPages: number;
}
