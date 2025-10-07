import {
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Req,
    Render,
} from '@nestjs/common';
import {RoundsService} from "../services/rounds.service";
import {Request} from "express";

@Controller('api/rounds')
export class RoundsController {
    constructor(private roundsService: RoundsService) {}
    @Get()
    getRounds() {
        return this.roundsService.get();
    }
    @Get('/:userId')
    getRound(@Param() param: { roundId: number }) {
        return this.roundsService.getRound(param);
    }
    @Post()
    store(@Req() req: Request) {
        return this.roundsService.create(req);
    }
    @Patch('/:userId')
    update(@Req() req: Request, @Param() param: { roundId: number }) {
        return this.roundsService.update(req, param);
    }
    @Delete()
    delete(@Param() param: { roundId: number }) {
        return this.roundsService.delete(param);
    }
}