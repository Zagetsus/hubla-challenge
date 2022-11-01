import { OperationObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

export const CreateManyTransactionsApiOperation: Partial<OperationObject> = {
  summary: 'Creating multiple transactions.',
  description:
    'Array handling to create several transactions from the imported file.'
};
