import { OperationObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

export const AuthApiOperation: Partial<OperationObject> = {
  summary: 'User authentication',
  description: 'User authentication using e-mail and password as credentials\n.'
};
