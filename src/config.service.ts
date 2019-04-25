import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  get() {
    return {
      shouldFail: true,
    };
  }
}
