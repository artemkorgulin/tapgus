import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/user.service';
import { User } from '../entities/user.entity';
import { PointsUser } from "../entities/points.entity";
import { SessionsUser } from "../entities/sessions.user.entity";
import { RolesUser } from "../entities/roles.user.entity";
import { UserRepository } from '../repositories/user.repository';
import { RolesUserRepository  } from '../repositories/roles.user.repository';
import { PointsUserRepository  } from '../repositories/points.user.repository';
import { SessionsUserRepository  } from '../repositories/sessions.user.repository';
import { TokenMiddleware } from '../middlewares/token.middleware';

@Module({
    imports: [TypeOrmModule.forFeature([User, PointsUser, SessionsUser, RolesUser])],
    controllers: [UserController],
    providers: [UserService, UserRepository, RolesUserRepository, PointsUserRepository, SessionsUserRepository],
    exports: [UserService, UserRepository, RolesUserRepository, PointsUserRepository, SessionsUserRepository],
})
export class UserModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(TokenMiddleware)
            .forRoutes('users');
    }
}