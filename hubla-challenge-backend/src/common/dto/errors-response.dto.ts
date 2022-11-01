import { ApiProperty } from '@nestjs/swagger';

export class ErrorsResponseDTO {
  @ApiProperty({
    type: String,
    description: 'property that has the error.',
    example: 'product',
    required: true
  })
  property: string;

  @ApiProperty({
    type: String,
    description: 'Error description.',
    example: 'The product entered is invalid',
    required: true
  })
  message: string;
}
