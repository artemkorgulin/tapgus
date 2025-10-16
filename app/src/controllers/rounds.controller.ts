import {
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Req,
    UseInterceptors, Query, Body,
} from '@nestjs/common';
import {RoundsService} from "../services/rounds.service";
import {Request} from "express";
import {PostStatusInterceptor} from "../interceptors/post.interceptor";
import {TransformInterceptor} from "../interceptors/transform.interceptor";

@Controller('api/rounds')
@UseInterceptors(PostStatusInterceptor)
export class RoundsController {
    constructor(private roundsService: RoundsService) {}

    @Get("/all")
    @UseInterceptors(TransformInterceptor)
    async getRounds(@Query() query: any) {
        const result =  await this.roundsService.get(query);
        return { message: 'success', result: result };
    }

    @Get('/:roundId')
    @UseInterceptors(TransformInterceptor)
    async getRound(@Param() param: { roundId: string }) {
        const result =  await this.roundsService.getRound(param);
        return { message: 'success', result: result };
    }
    @Post()
    @UseInterceptors(TransformInterceptor)
    async store(@Req() req: Request, @Body() plainText: any) {
        const result =  this.roundsService.create(plainText);
        return { message: 'success', result: result };
    }
    @Patch('/:roundId')
    @UseInterceptors(TransformInterceptor)
    async update(@Req() req: Request, @Param() param: { roundId: number }) {
        const result =  this.roundsService.update(req, param);
        return { message: 'success', result: result };
    }
    @Delete()
    @UseInterceptors(TransformInterceptor)
    async delete(@Param() param: { roundId: number }) {
        const result =  this.roundsService.delete(param);
        return { message: 'success', result: result };
    }
}