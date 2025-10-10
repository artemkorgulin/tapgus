import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { RoundRepository } from "../repositories/round.repository";
import { Rounds } from "../entities/rounds.entity";

@Injectable()
export class RoundsService {

    constructor(private readonly roundsRepository: RoundRepository) {}

    get(query: any): Promise<Rounds[]> {
        return this.roundsRepository.findAll(query);
    }
    getRound(param: { roundId: number }) {
        return param;
    }
    create(req: Request) {
        return req.body;
    }
    update(req: Request, param: { roundId: number }) {
        return { body: req.body, param };
    }
    delete(param: { roundId: number }) {
        return param;
    }
}