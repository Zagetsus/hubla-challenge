import { Test, TestingModule } from '@nestjs/testing';
import { TypesTransactionsService } from './types-transactions.service';

describe('TypesTransactionsService', () => {
  let service: TypesTransactionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypesTransactionsService]
    }).compile();

    service = module.get<TypesTransactionsService>(TypesTransactionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
