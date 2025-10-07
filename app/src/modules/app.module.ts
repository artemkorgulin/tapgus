import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { UserModule } from "./user.module";
import { AuthModule } from "./auth.module";
import { RoundsModule } from "./rounds.module";
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { join } from 'path';
import {TokenMiddleware} from "../middlewares/token.middleware";

require('dotenv').config();

const {
    TYPEORM_HOST,
    TYPEORM_USERNAME,
    TYPEORM_PASSWORD,
    TYPEORM_DATABASE,
    TYPEORM_PORT,
} = process.env;

@Module({
    controllers: [
        AppController,
    ],
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: TYPEORM_HOST,
            port: Number(TYPEORM_PORT),
            username: TYPEORM_USERNAME,
            password: TYPEORM_PASSWORD,
            database: TYPEORM_DATABASE,
            entities: [join(__dirname, '**', '*.entity.{ts,js}')],
        }),
        UserModule,
        AuthModule,
        RoundsModule,
    ]
})

export class AppModule implements NestModule {
    constructor(private dataSource: DataSource) {}
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(TokenMiddleware)
            .forRoutes({ path: 'tapgus', method: RequestMethod.GET });
    }
}