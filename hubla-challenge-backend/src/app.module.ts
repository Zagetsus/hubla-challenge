import { Module } from '@nestjs/common';
import { RootModule } from './root/root.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ExtractsModule } from './extracts/extracts.module';
import { FilesModule } from './files/files.module';
import { TypesTransactionsModule } from './types-transactions/types-transactions.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    RootModule,
    AuthModule,
    UsersModule,
    ExtractsModule,
    FilesModule,
    TypesTransactionsModule,
    ProductsModule
  ]
})
export class AppModule {}
