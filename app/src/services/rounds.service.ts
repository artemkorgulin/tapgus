import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class RoundsService {
    get(query: any) {
        return [
            { name: 'Round 1', country: 'Moscow' },
            { name: 'Round 2', country: 'Piter' },
            { name: 'Round 3', country: 'Bavaria' },
            { name: 'Round 4', country: 'Huston' },
            { name: 'Round 5', country: 'Mexico' }
        ];
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