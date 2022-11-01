import { OperationObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

export const BalanceApiOperation: Partial<OperationObject> = {
  summary: 'Total balance of the statement.',
  description: 'Summary of the total input and output values of the statement.'
};
