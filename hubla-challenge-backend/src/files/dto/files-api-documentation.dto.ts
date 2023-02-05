import { OperationObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';
import { ApiImplicitFileMetadata } from '@nestjs/swagger/dist/decorators/api-implicit-file.decorator';

export const FilesApiOperation: Partial<OperationObject> = {
  summary: 'File handling.',
  description: 'File handling for creating a new product row.'
};

export const FilesApiConsumes = 'multipart/form-data';

export const FilesApiImplicitFile: ApiImplicitFileMetadata = {
  name: 'file',
  required: true,
  description:
    'File that will be parsed the row data. file only with .txt extension'
};
