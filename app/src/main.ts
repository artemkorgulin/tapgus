import { ValidationPipe, RequestMethod } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NextFunction, Request, Response } from 'express';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './modules/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });

  const config = new DocumentBuilder()
    .setTitle('Swagger tapGuss Application')
    .setDescription('The tapGuss API description')
    .setVersion('1.0')
    .addTag('tapGuss')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, documentFactory);

  app.use(function (request: Request, response: Response, next: NextFunction) {
    response.setHeader('Access-Control-Allow-Origin', process.env.CORS_ALLOW_HOST+':'+process.env.CORS_ALLOW_PORT);
    response.setHeader("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS, PATCH, PUT");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    response.setHeader('Access-Control-Allow-Credentials', "true");
    next();
  });
  await app.listen(3000);
}
bootstrap();