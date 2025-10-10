import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from '../controllers/auth.controller';
import { AuthService } from "../services/auth.service";
import { UserService } from "../services/user.service";
import { PassportModule } from '@nestjs/passport';
import { UserRepository } from '../repositories/user.repository';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../entities/user.entity";

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
        TypeOrmModule.forFeature([User])
    ],
    providers: [AuthService, UserService, UserRepository],
    exports: [AuthService, UserService, UserRepository],
})
export class AuthModule {}