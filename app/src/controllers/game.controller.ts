import {
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Req,
    Query,
    UseInterceptors, Body,
} from '@nestjs/common';
import { GameService } from '../services/game.service';
import {PostStatusInterceptor} from "../interceptors/post.interceptor";
import {TransformInterceptor} from "../interceptors/transform.interceptor";
import {Request, Response} from "express";

@Controller('api/game')
@UseInterceptors(PostStatusInterceptor)
export class GameController {
    constructor(private gameService: GameService) {}

    @Post('tapguss')
    @UseInterceptors(TransformInterceptor)
    async tapguss(@Req() req: Request, @Body() plainText: any) {
        const result =  await this.gameService.tap(plainText);
        return { message: 'success', result: result };
    }
}