import {
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Req,
    Render,
    UseInterceptors, Query,
} from '@nestjs/common';
import {RoundsService} from "../services/rounds.service";
import {Request} from "express";
import {PostStatusInterceptor} from "../interceptors/post.interceptor";

@Controller('api/rounds')
@UseInterceptors(PostStatusInterceptor)
export class RoundsController {
    constructor(private roundsService: RoundsService) {}

    @Get("/all")
    async getRounds(@Query() query: any) {
        let subData: { data: {} } = {
            "data": {}
        };
        subData.data = this.roundsService.get(query);
        return {
            data: subData
        };
    }

    @Get('/:roundId')
    getRound(@Param() param: { roundId: number }) {
        let subData: { data: {} } = {
            "data": {}
        };
        subData.data = this.roundsService.getRound(param);
        return {
            data: subData
        };
    }
    @Post()
    store(@Req() req: Request) {
        let subData: { data: {} } = {
            "data": {}
        };
        subData.data = this.roundsService.create(req);
        return {
            data: subData
        };
    }
    @Patch('/:roundId')
    update(@Req() req: Request, @Param() param: { roundId: number }) {
        return this.roundsService.update(req, param);
    }
    @Delete()
    delete(@Param() param: { roundId: number }) {
        return this.roundsService.delete(param);
    }
}