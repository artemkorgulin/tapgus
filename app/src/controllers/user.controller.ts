import {
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Req,
    Query,
    UseInterceptors,
} from '@nestjs/common';
import { Request } from 'express';
import { UserService } from '../services/user.service';
import { SignupDto } from '../dto/signup.dto';
import {PostStatusInterceptor} from "../interceptors/post.interceptor";

@Controller('api/user')
@UseInterceptors(PostStatusInterceptor)
export class UserController {
    constructor(private userService: UserService) {}

    @Get("/all")
    async getUsers(@Query() query: any) {
        return this.userService.get(query);
    }

    @Get('/:userId')
    getUser(@Param() param: { userId: number }) {
        return this.userService.getUser(param);
    }
    @Post("/create")
    store(@Req() req: Request) {
        return this.userService.createUser(req);
    }
    @Patch('/:userId')
    update(@Req() req: Request, @Param() param: { userId: number }) {
        return this.userService.update(req, param);
    }
    @Delete()
    delete(@Param() param: { userId: number }) {
        return this.userService.delete(param);
    }
    @Post('tapguss')
    tapguss(@Param() param: { UserPoints: number }) {
        return this.userService.tap(param);
    }
}