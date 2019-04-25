import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { ConfigService } from './config.service';

@Injectable()
export class ForceFailGuard implements CanActivate {

  constructor(
    private configService: ConfigService,
  ) {

  }

  canActivate(context: ExecutionContext) {
    return !this.configService.get().shouldFail;
  }

}
