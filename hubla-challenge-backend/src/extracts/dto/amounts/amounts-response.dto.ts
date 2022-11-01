import { ApiProperty } from '@nestjs/swagger';

export class AmountsResponseDTO {
  @ApiProperty({
    type: Number,
    description: 'Total value of inbound transactions',
    example: 159.02,
    required: true
  })
  inbound: number;

  @ApiProperty({
    type: Number,
    description: 'Total value of outbound transactions.',
    example: 159.02,
    required: true
  })
  outbound: number;
}
