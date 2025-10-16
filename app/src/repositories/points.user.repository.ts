import { InjectRepository } from '@nestjs/typeorm';
import {InsertResult, Repository} from 'typeorm';
import { PointsUser } from '../entities/points.entity';

export class PointsUserRepository {
    constructor(
        @InjectRepository(PointsUser)
        private readonly pointUserRepository: Repository<PointsUser>,
    ) {}

    async findAll(query?: any): Promise<PointsUser[]> {
        const queryBuilder = this.pointUserRepository.createQueryBuilder('pointsUser');

        if (query?.search) {
            queryBuilder.where(
                'points_user.points_user LIKE :search',
                { search: `%${query.search}%` }
            );
        }

        if (query?.limit) {
            queryBuilder.limit(query.limit);
        }

        if (query?.offset) {
            queryBuilder.offset(query.offset);
        }

        return queryBuilder.getMany();
    }

    async findById(id: number): Promise<PointsUser | null> {
        return this.pointUserRepository.findOneById(id);
    }

    async findByUserIdPoint(points_user: string): Promise<PointsUser | null> {
        return this.pointUserRepository.findOne({ where: { points_user } });
    }

    async findByUserIdPoints(points_user: string): Promise<PointsUser[]> {
        return this.pointUserRepository.find({ where: { points_user } });
    }

    async createOrUpdateUserPoints(userData: any) {
        const existingUserPoints = await this.findByUserIdPoint(userData.points_user);
        if (existingUserPoints?.id) {
            this.update(existingUserPoints, userData);
        } else {
            await this.insert(userData);
        }
    }

    async insert(userData: any): Promise<InsertResult> {
        return this.pointUserRepository.insert(userData);
    }

    async create(pointsUserData: any): Promise<PointsUser[]> {
        const round = this.pointUserRepository.create(pointsUserData);
        return this.pointUserRepository.save(round);
    }

    async update(user: PointsUser, updateData: any): Promise<PointsUser> {
        Object.assign(user, updateData);
        return this.pointUserRepository.save(user);
    }

    async delete(user: PointsUser): Promise<void> {
        await this.pointUserRepository.remove(user);
    }

    async count(query?: any): Promise<number> {
        const queryBuilder = this.pointUserRepository.createQueryBuilder('pointsUser');

        if (query?.search) {
            queryBuilder.where(
                'points_user.points_user LIKE :search',
                { search: `%${query.search}%` }
            );
        }

        return queryBuilder.getCount();
    }
}