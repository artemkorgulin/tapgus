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
import {PostStatusInterceptor} from "../interceptors/post.interceptor";
import {TransformInterceptor} from "../interceptors/transform.interceptor";

@Controller('api/user')
@UseInterceptors(PostStatusInterceptor)
export class UserController {
    constructor(private userService: UserService) {}

    @Get("/all")
    @UseInterceptors(TransformInterceptor)
    async getUsers(@Query() query: any) {
        const result =  await this.userService.get(query);
        return { message: 'success', result: result };
    }

    @Get('/:userId')
    @UseInterceptors(TransformInterceptor)
    async getUser(@Param() param: { userId: number }) {
        const result =  this.userService.getUser(param);
        return { message: 'success', result: result };
    }
    @Post("/create")
    @UseInterceptors(TransformInterceptor)
    async store(@Req() req: Request) {
        const result =  this.userService.createUser(req);
        return { message: 'success', result: result };
    }
    @Patch('/:userId')
    @UseInterceptors(TransformInterceptor)
    async update(@Req() req: Request, @Param() param: { userId: number }) {
        const result =  this.userService.update(req, param);
        return { message: 'success', result: result };
    }
    @Delete()
    @UseInterceptors(TransformInterceptor)
    async delete(@Param() param: { userId: number }) {
        const result =  this.userService.delete(param);
        return { message: 'success', result: result };
    }
}