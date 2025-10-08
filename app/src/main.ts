import { ValidationPipe, RequestMethod } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './modules/app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // Сообщим приложению, где искать наши views.
  app.setBaseViewsDir(join(__dirname, '../views'));
  // И укажем, какой шаблонизатор использовать
  app.setViewEngine('pug');
  app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
  );

  await app.listen(3000);
}
bootstrap();