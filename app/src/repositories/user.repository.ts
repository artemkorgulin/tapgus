import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { IUserRepository } from './user.repository.interface';
import { SignupDto } from '../dto/signup.dto';

export class UserRepository implements IUserRepository {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async findAll(query?: any): Promise<User[]> {
        const queryBuilder = this.userRepository.createQueryBuilder('user');

        if (query?.search) {
            queryBuilder.where(
                'user.login LIKE :search OR user.email LIKE :search',
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

    async findById(id: string): Promise<User | null> {
        return this.userRepository.findOneById(id);
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.userRepository.findOne({ where: { email } });
    }

    async findByLogin(login: string): Promise<User | null> {
        return this.userRepository.findOne({ where: { login } });
    }

    async create(userData: SignupDto): Promise<User> {
        const user = this.userRepository.create(userData);
        return this.userRepository.save(user);
    }

    async update(user: User, updateData: SignupDto): Promise<User> {
        Object.assign(user, updateData);
        return this.userRepository.save(user);
    }

    async delete(user: User): Promise<void> {
        await this.userRepository.remove(user);
    }

    async count(query?: any): Promise<number> {
        const queryBuilder = this.userRepository.createQueryBuilder('user');

        if (query?.search) {
            queryBuilder.where(
                'user.login LIKE :search OR user.email LIKE :search',
                { search: `%${query.search}%` }
            );
        }

        return queryBuilder.getCount();
    }
}