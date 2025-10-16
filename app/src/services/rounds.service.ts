import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { RoundRepository } from "../repositories/round.repository";
import { PointsUserRepository } from "../repositories/points.user.repository";
import { UserRepository } from "../repositories/user.repository";
import { Rounds } from "../entities/rounds.entity";

@Injectable()
export class RoundsService {

    private summaryInfoRound: { winer: any; allPoints: number; myPoints: number; roundData: any };

    constructor(
        private readonly roundsRepository: RoundRepository,
        private readonly pointsUserRepository: PointsUserRepository,
        private readonly userRepository: UserRepository
    ) {}

    get(query: any): Promise<Rounds[]> {
        return this.roundsRepository.findAll(query);
    }
    async getRound(param: { roundId: string }) {
        this.summaryInfoRound = {
            "winer": {},
            "myPoints": 0,
            "allPoints": 0,
            "roundData": ""
        };
        const round = await this.roundsRepository.findById(String(param.roundId));
        if(round) {
            this.summaryInfoRound['roundData'] = round;
            const allRoundsUser = await this.pointsUserRepository.findByUserIdPoints(round.round_user);
            for (let roundItemUser of allRoundsUser) {
                this.summaryInfoRound.myPoints += Number(roundItemUser.points);
            }
            const allRoundsPoints = await this.pointsUserRepository.findAll();
            for (let roundItemPoint of allRoundsPoints) {
                this.summaryInfoRound.allPoints += Number(roundItemPoint.points);
            }
            const infoRoundUsers = new Map();
            const allRounds = await this.pointsUserRepository.findAll();
            for (let roundItem of allRounds) {
                if(infoRoundUsers.has(roundItem.points_user)) {
                    const userPoints = infoRoundUsers.get(roundItem.points_user);
                    infoRoundUsers.set(roundItem.points_user,(userPoints+roundItem.points));
                } else {
                    infoRoundUsers.set(roundItem.points_user,roundItem.points);
                }
            }
            if(infoRoundUsers.size > 0) {
                const infoRoundUsersSortDesc = new Map(
                    [...infoRoundUsers.entries()].sort((a, b) => b[1] - a[1])
                );

                const maxWinerPoints = infoRoundUsersSortDesc.values().next().value;
                const userWinerId = infoRoundUsersSortDesc.keys().next().value;
                const userWiner = await this.userRepository.findById(String(userWinerId));
                if(userWiner?.username) {
                    this.summaryInfoRound.winer['username'] = userWiner?.username;
                }
                if(maxWinerPoints) {
                    this.summaryInfoRound.winer['points'] = maxWinerPoints;
                }
            } else {
                this.summaryInfoRound.winer['username'] = "";
                this.summaryInfoRound.winer['points'] = 0;
            }
        }

        return this.summaryInfoRound;
    }
    create(req: Request) {
        return this.roundsRepository.createOrUpdateRound(req.body);
    }
    update(req: Request, param: { roundId: number }) {
        return { body: req.body, param };
    }
    delete(param: { roundId: number }) {
        return param;
    }
}