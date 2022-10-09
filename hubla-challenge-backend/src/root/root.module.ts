import { Module } from '@nestjs/common';
import {RootService} from "~/root/root.service";
import {RootController} from "~/root/root.controller";

@Module({
  imports: [],
  controllers: [RootController],
  providers: [RootService]
})
export class RootModule {}
