import { Module } from '@nestjs/common';
import { ExtractsService } from '~/extracts/extracts.service';
import { ExtractsController } from '~/extracts/extracts.controller';
import { ExtractsRepository } from '~/extracts/extracts.repository';
import { AppLogger } from '~/app.logger';
import { PrismaService } from '~/common/services';

@Module({
  providers: [ExtractsService, ExtractsRepository, AppLogger, PrismaService],
  controllers: [ExtractsController]
})
export class ExtractsModule {}
