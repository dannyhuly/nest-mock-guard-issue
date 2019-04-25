import { CanActivate } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ForceFailGuard } from './force-fail.guard';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {

    const mock_ForceFailGuard = { CanActivate: jest.fn(() => true) };

    const app: TestingModule = await Test
      .createTestingModule({
        controllers: [AppController],
        providers: [
          AppService,
          ForceFailGuard,
        ],
      })
      .overrideProvider(ForceFailGuard).useValue(mock_ForceFailGuard)
      .overrideGuard(ForceFailGuard).useValue(mock_ForceFailGuard)
      .compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {

    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });

  });
});
