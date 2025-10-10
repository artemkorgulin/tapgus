import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { app } from 'main';

const config = new DocumentBuilder()
    .setTitle('Users API')
    .setDescription('API для управления пользователями')
    .setVersion('1.0')
    .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);