import { Injectable } from '@nestjs/common';
import { PointsUserRepository } from '../repositories/points.user.repository';
import { UserService } from './user.service';

@Injectable()
export class GameService {

    private gameUser: any;
    private userData: any;

    constructor(
        private readonly pointsUserRepository: PointsUserRepository,
        private readonly uerService: UserService
    ) {}

    async tap(plainText: any) {
        this.gameUser = this.uerService.checkSessionUser(plainText.UserSessId);
        this.gameUser.then(async (session: any) => {
            this.pointsUserRepository.createOrUpdateUserPoints({
                points_user: String(plainText.UserId),
                points: Number(plainText.UserPoints),
                roundId: String(plainText.UserRound)
            });
            return {status: "success"};
        });
        return {status: "success"};
    }
}