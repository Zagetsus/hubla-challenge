import { ApiProperty } from '@nestjs/swagger';

export class BalanceResponseDTO {
  @ApiProperty({
    type: Number,
    minimum: 0,
    description: '',
    example: 404867.94,
    required: true
  })
  entries: number;

  @ApiProperty({
    type: Number,
    minimum: 0,
    description: '',
    example: 120156.78,
    required: true
  })
  outputs: number;
}
