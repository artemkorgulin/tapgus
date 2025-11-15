import {
    Controller,
    Get,
    Param,
    Res,
    Post,
    Body,
    UseInterceptors
} from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from '../services/auth.service';
import { PostStatusInterceptor } from '../interceptors/post.interceptor';
import { TransformInterceptor } from "../interceptors/transform.interceptor";
import crypto from 'crypto';

@Controller('api/auth')
@UseInterceptors(PostStatusInterceptor)
export class AuthController {

    private validateUser: boolean = false;
    private userSessid: string = "";
    private tokenResp: any;
    private subData: {
        data: {
            userId: string | undefined;
            userUserName: string | undefined;
            userEmail: string | undefined;
            userSessid: string;
            validateUser: boolean;
            accessToken: string;
        }
    };

    constructor(private authService: AuthService) {}
    @Get('token')
    @UseInterceptors(TransformInterceptor)
    async token(@Param() param: { email: string }) {
        const result = this.authService.getToken(param.email);
        return { message: 'success', result: result };
    }
    @Post('checkauth')
    @UseInterceptors(TransformInterceptor)
    async checkauth() {
        const result = { success: false };
        return { message: 'success', result: result };
    }

    @Post('checkrole')
    @UseInterceptors(TransformInterceptor)
    async checkrole(@Param() param: { sessid: string }) {
        const result = await this.authService.checkRole(param.sessid);
        return { message: 'success', result: result };
    }

    @Post('login')
    async login(@Res({passthrough: true}) res: Response, @Body() plainText: any) {
        this.subData  = {
            "data": {
                userId: "",
                userSessid: "",
                userEmail: "",
                userUserName: "",
                validateUser: this.validateUser,
                accessToken: ""
            }
        };

        if (plainText) {
            this.validateUser = this.authService.loginCheckUser(plainText.login);
            if(this.validateUser) {

                const userAuth = await this.authService.getUser(plainText.login);
                if (userAuth?.id) {
                    this.userSessid = crypto.randomUUID();

                    const payload = {
                        userId: userAuth?.id,
                        email: userAuth?.email,
                        login: plainText.login,
                        userSessid: this.userSessid,
                        password: plainText.password
                    };
                    this.tokenResp = this.authService.generateTokenJwt(
                        payload,
                        String(process.env.PRIVATE_EXPIRE_IN)
                    );

                    const token = this.tokenResp.access_token;
                    res.cookie('token', token, {
                        expires: new Date(new Date().getTime() + Number(process.env.PRIVATE_COOKIE_DAY) * 1000),
                        sameSite: 'strict',
                        httpOnly: false,
                        secure: false
                    });

                    this.authService.signUser(
                        userAuth.id,
                        this.userSessid
                    );

                    this.subData = {
                        "data": {
                            userId: userAuth?.id,
                            userSessid: this.userSessid,
                            userEmail: userAuth?.email,
                            userUserName: userAuth?.login,
                            validateUser: this.validateUser,
                            accessToken: token,
                        }
                    };
                }
            }
        }

        return {
            data: this.subData
        };
    }

    @Get('logout')
    @UseInterceptors(TransformInterceptor)
    async logout(@Res({ passthrough: true }) res: Response) {
        res.cookie('token', '', { expires: new Date() });
        const result =  { success: true };
        return { message: 'success', result: result };
    }
}