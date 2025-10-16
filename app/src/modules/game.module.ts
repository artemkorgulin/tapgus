import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { GameController } from '../controllers/game.controller';
import { GameService } from '../services/game.service';
import { UserService } from '../services/user.service';
import { UserRepository   } from '../repositories/user.repository';
import { PointsUserRepository  } from '../repositories/points.user.repository';
import { SessionsUserRepository  } from '../repositories/sessions.user.repository';
import { RolesUserRepository  } from '../repositories/roles.user.repository';
import { TokenMiddleware } from "../middlewares/token.middleware";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PointsUser } from "../entities/points.entity";
import { User } from "../entities/user.entity";
import { SessionsUser } from "../entities/sessions.user.entity";
import { RolesUser } from "../entities/roles.user.entity";

@Module({
    imports: [TypeOrmModule.forFeature([User, PointsUser, SessionsUser, RolesUser])],
    controllers: [GameController],
    providers: [GameService, UserRepository, UserService, RolesUserRepository, PointsUserRepository, SessionsUserRepository],
    exports: [GameService, UserRepository, UserService, RolesUserRepository, PointsUserRepository, SessionsUserRepository],
})
export class GameModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(TokenMiddleware)
            .forRoutes('game');
    }
}