import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from '../controllers/auth.controller';
import { AuthService } from "../services/auth.service";
import { UserService } from "../services/user.service";
import { PassportModule } from '@nestjs/passport';
import { UserRepository } from '../repositories/user.repository';
import { PointsUserRepository  } from '../repositories/points.user.repository';
import { SessionsUserRepository } from '../repositories/sessions.user.repository';
import { RolesUserRepository  } from '../repositories/roles.user.repository';
import {TypeOrmModule} from "@nestjs/typeorm";
import { User } from "../entities/user.entity";
import { PointsUser } from "../entities/points.entity";
import { SessionsUser } from "../entities/sessions.user.entity";
import { RolesUser } from "../entities/roles.user.entity";

@Module({
    controllers: [AuthController],
    imports: [
        PassportModule.register({
            session: false,
        }),
        JwtModule.register({
            secretOrPrivateKey: process.env.PRIVATE_KEY,
            secret: process.env.PRIVATE_KEY,
            signOptions: { expiresIn: process.env.PRIVATE_EXPIRE_IN },
        }),
        TypeOrmModule.forFeature([User, PointsUser, SessionsUser, RolesUser])
    ],
    providers: [AuthService, UserService, UserRepository, RolesUserRepository, PointsUserRepository, SessionsUserRepository],
    exports: [AuthService, UserService, UserRepository, RolesUserRepository,PointsUserRepository, SessionsUserRepository],
})
export class AuthModule {}