import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoundsController } from '../controllers/rounds.controller';
import { RoundsService } from '../services/rounds.service';
import { Rounds } from '../entityes/rounds.entity';
import {TokenMiddleware} from "../middlewares/token.middleware";

@Module({
    imports: [TypeOrmModule.forFeature([Rounds])],
    controllers: [RoundsController],
    providers: [RoundsService],
    exports: [RoundsService],
})
export class RoundsModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(TokenMiddleware)
            .forRoutes('rounds');
    }
}