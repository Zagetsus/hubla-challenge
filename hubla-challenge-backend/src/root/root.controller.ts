import { Controller, Get, VERSION_NEUTRAL } from '@nestjs/common';
import { RootService } from '~/root/root.service';

@Controller({
  version: VERSION_NEUTRAL
})
export class RootController {
  constructor(private readonly rootService: RootService) {}

  @Get()
  getHello(): string {
    return this.rootService.getHello();
  }
}
