import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { Rounds } from '../entities/rounds.entity';

export class RoundRepository {
    constructor(
        @InjectRepository(Rounds)
        private readonly roundsRepository: Repository<Rounds>,
    ) {}

    async findAll(query?: any): Promise<Rounds[]> {
        const queryBuilder = this.roundsRepository.createQueryBuilder('rounds');

        if (query?.search) {
            queryBuilder.where(
                'rounds.round_name LIKE :search OR rounds.round_user LIKE :search',
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

    async findById(id: string): Promise<Rounds | null> {
        return this.roundsRepository.findOneById(id);
    }

    async findByRoundName(round_name: string): Promise<Rounds | null> {
        return this.roundsRepository.findOne({ where: { round_name } });
    }

    async findByRoundsUser(round_user: string): Promise<Rounds[]> {
        return this.roundsRepository.find({ where: { round_user } });
    }

    async findByUserRounds(round_user: string): Promise<Rounds | null> {
        return this.roundsRepository.findOne({ where: { round_user } });
    }

    async createOrUpdateRound(roundData: any) {
        const existingRound = await this.findByUserRounds(roundData.round_user);
        if (existingRound?.id) {
            await this.update(existingRound, roundData);
        } else {
            await this.insert(roundData);
        }
    }

    async insert(sessData: any): Promise<InsertResult> {
        return this.roundsRepository.insert(sessData);
    }

    async create(roundData: any): Promise<Rounds[]> {
        const round = this.roundsRepository.create(roundData);
        return this.roundsRepository.save(round);
    }

    async update(user: Rounds, updateData: any): Promise<Rounds> {
        Object.assign(user, updateData);
        return this.roundsRepository.save(user);
    }

    async delete(user: Rounds): Promise<void> {
        await this.roundsRepository.remove(user);
    }

    async count(query?: any): Promise<number> {
        const queryBuilder = this.roundsRepository.createQueryBuilder('rounds');

        if (query?.search) {
            queryBuilder.where(
                'rounds.round_name LIKE :search OR rounds.round_user LIKE :search',
                { search: `%${query.search}%` }
            );
        }

        return queryBuilder.getCount();
    }
}