import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ForceFailGuard } from './force-fail.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(ForceFailGuard)
  getHello(): string {
    return this.appService.getHello();
  }
}
