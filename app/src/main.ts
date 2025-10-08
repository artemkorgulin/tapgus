import { ValidationPipe, RequestMethod } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NextFunction, Request, Response } from 'express';
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

  app.use(function (request: Request, response: Response, next: NextFunction) {
    response.setHeader('Access-Control-Allow-Origin', process.env.CORS_ALLOW_HOST+':'+process.env.CORS_ALLOW_PORT);
    next();
  });
  await app.listen(3000);
}
bootstrap();