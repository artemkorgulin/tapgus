import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { UserModule } from "./user.module";
import { AuthModule } from "./auth.module";
import { RoundsModule } from "./rounds.module";
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokenMiddleware } from "../middlewares/token.middleware";
import { typeOrmAsyncConfig } from "../config/typeorm.config";

@Module({
    controllers: [
        AppController,
    ],
    imports: [
        TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
        UserModule,
        AuthModule,
        RoundsModule,
    ]
})

export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(TokenMiddleware)
            .forRoutes({ path: 'tapgus', method: RequestMethod.GET });
    }
}