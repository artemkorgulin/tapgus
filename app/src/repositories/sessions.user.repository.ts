import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult} from 'typeorm';
import { SessionsUser } from '../entities/sessions.user.entity';
import crypto from "crypto";

export class SessionsUserRepository {
    constructor(
        @InjectRepository(SessionsUser)
        private readonly sessionsUserRepository: Repository<SessionsUser>,
    ) {}

    async findAll(query?: any): Promise<SessionsUser[]> {
        const queryBuilder = this.sessionsUserRepository.createQueryBuilder('sessionUser');

        if (query?.search) {
            queryBuilder.where(
                'sessions_user.sessid LIKE :search',
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

    async findById(id: number): Promise<SessionsUser | null> {
        return this.sessionsUserRepository.findOneById(id);
    }

    async findByUserSessId(sessid: string): Promise<SessionsUser | null> {
        return this.sessionsUserRepository.findOne({ where: { sessid } });
    }

    async insert(sessData: any): Promise<InsertResult> {
        return this.sessionsUserRepository.insert(sessData);
    }

    async create(sessData: any): Promise<SessionsUser[]> {
        const session = this.sessionsUserRepository.create(sessData);
        return this.sessionsUserRepository.save(session);
    }

    async createOrUpdateSession(sessData: any) {
        const existingSess = await this.findByUserSessId(sessData.sessid);
        if (existingSess?.id) {
            this.update(existingSess, sessData);
        } else {
            await this.insert(sessData);
        }
    }

    async update(user: SessionsUser, updateData: any): Promise<SessionsUser> {
        Object.assign(user, updateData);
        return this.sessionsUserRepository.save(user);
    }

    async delete(user: SessionsUser): Promise<void> {
        await this.sessionsUserRepository.remove(user);
    }

    async count(query?: any): Promise<number> {
        const queryBuilder = this.sessionsUserRepository.createQueryBuilder('sessionUser');

        if (query?.search) {
            queryBuilder.where(
                'sessions_user.sessid LIKE :search',
                { search: `%${query.search}%` }
            );
        }

        return queryBuilder.getCount();
    }
}