import { Test, TestingModule } from '@nestjs/testing';
import { ExtractsController } from './extracts.controller';

describe('ExtractsController', () => {
  let controller: ExtractsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExtractsController]
    }).compile();

    controller = module.get<ExtractsController>(ExtractsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
