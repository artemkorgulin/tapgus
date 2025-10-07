import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from '../controllers/auth.controller';
import { AuthService } from "../services/auth.service";
import { PassportModule } from '@nestjs/passport';

@Module({
    controllers: [AuthController],
    imports: [
        PassportModule.register({
            session: false,
        }),
        JwtModule.register({
            secretOrPrivateKey: process.env['PRIVATE_KEY'],
            secret: process.env['PRIVATE_KEY'],
            signOptions: { expiresIn: process.env['PRIVATE_EXPIRE_IN'] },
        }),
    ],
    providers: [AuthService],
    exports: [AuthService],
})
export class AuthModule {}