import { OperationObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

export const TransactionByDateApiOperation: Partial<OperationObject> = {
  summary: 'List of transactions by date.',
  description:
    'List sorted by most recent dates and date separation with balance sheet and transactions for the day.'
};
