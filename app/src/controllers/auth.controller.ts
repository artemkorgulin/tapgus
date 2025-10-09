import {
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    HttpCode,
    HttpStatus,
    Res,
    Post,
    Req,
    UseInterceptors
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { PostStatusInterceptor } from '../interceptors/post.interceptor';
import { SignupDto } from '../dto/signup.dto';
import { JwtModule } from "@nestjs/jwt";

@Controller('api/auth')
@UseInterceptors(PostStatusInterceptor)
export class AuthController {
    constructor(private authService: AuthService) {}
    @Get('token')
    token(@Param() param: { email: string }) {
        return this.authService.getToken(param.email);
    }
    @Post('checkauth')
    checkauth() {
        return {
            status: 'fail'
        };
    }

    @Post('login')
    async login(@Res({passthrough: true}) res: Response) {
        let token;
        let validateUser = false;
        let payload = JwtModule.register({
            secretOrPrivateKey: process.env.PRIVATE_KEY,
            secret: process.env.PRIVATE_KEY,
            signOptions: {expiresIn: process.env.PRIVATE_EXPIRE_IN},
        });
        token = this.authService.generateTokenJwt(
            payload,
            String(process.env.PRIVATE_EXPIRE_IN)
        );

        res.cookie('token', token.access_token, {
            expires: new Date(new Date().getTime() + Number(process.env.PRIVATE_COOKIE_DAY) * 1000),
            sameSite: 'strict',
            httpOnly: false,
            secure: false
        });

        if (payload) {
            let payloadObj = JSON.parse(String(payload));
            validateUser = await this.authService.loginCheckUser(payloadObj.login);
        }

        let subData = {
            "data": {
                accessToken: token.access_token,
                reload: 'N'
            }
        };

        if (validateUser) {
            return {
                data: subData
            };
        } else {
            return {
                data: {
                    "message": "user not found"
                }
            };
        }
    }

    @Get('logout')
    logout(@Res({ passthrough: true }) res: Response) {
        // Some internal checks
        res.cookie('token', '', { expires: new Date() });
    }
}