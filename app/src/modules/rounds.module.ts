import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoundsController } from '../controllers/rounds.controller';
import { RoundsService } from '../services/rounds.service';
import { Rounds } from '../entities/rounds.entity';
import { PointsUser } from "../entities/points.entity";
import { User } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';
import { RoundRepository } from '../repositories/round.repository';
import {TokenMiddleware} from "../middlewares/token.middleware";
import { PointsUserRepository  } from '../repositories/points.user.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Rounds, User, PointsUser])],
    controllers: [RoundsController],
    providers: [RoundsService, RoundRepository, UserRepository, PointsUserRepository],
    exports: [RoundsService, RoundRepository, UserRepository, PointsUserRepository],
})
export class RoundsModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(TokenMiddleware)
            .forRoutes('rounds');
    }
}