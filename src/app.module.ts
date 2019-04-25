import { ForceFailGuard } from './force-fail.guard';
import { ConfigService } from './config.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    ConfigService,
    ForceFailGuard,
  ],
})
export class AppModule { }
