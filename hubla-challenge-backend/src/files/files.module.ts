import { BadRequestException, Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppLogger } from '~/app.logger';
import { TypesTransactionsModule } from '~/types-transactions/types-transactions.module';
import { UsersModule } from '~/users/users.module';
import { ProductsModule } from '~/products/products.module';

const validationFile = (_, file, cb) => {
  if (file.mimetype !== 'text/plain') {
    return cb(new BadRequestException('file is not allowed'), false);
  }

  cb(null, true);
};

@Module({
  imports: [
    MulterModule.register({
      dest: './src/.temp/uploads',
      fileFilter: validationFile
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '.temp/uploads')
    }),
    UsersModule,
    TypesTransactionsModule,
    ProductsModule
  ],
  providers: [FilesService, AppLogger],
  controllers: [FilesController]
})
export class FilesModule {}
