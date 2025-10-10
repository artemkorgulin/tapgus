import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rounds } from '../entities/rounds.entity';
import { SignupDto } from '../dto/signup.dto';

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

    async findById(id: number): Promise<Rounds | null> {
        return this.roundsRepository.findOneById(id);
    }

    async findByRoundName(round_name: string): Promise<Rounds | null> {
        return this.roundsRepository.findOne({ where: { round_name } });
    }

    async findByUserRounds(round_user: string): Promise<Rounds | null> {
        return this.roundsRepository.findOne({ where: { round_user } });
    }

    async create(roundData: any): Promise<Rounds[]> {
        const round = this.roundsRepository.create(roundData);
        return this.roundsRepository.save(round);
    }

    async update(user: Rounds, updateData: SignupDto): Promise<Rounds> {
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