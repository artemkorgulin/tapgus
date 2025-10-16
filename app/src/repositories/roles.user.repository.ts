import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RolesUser } from '../entities/roles.user.entity';

export class RolesUserRepository {
    constructor(
        @InjectRepository(RolesUser)
        private readonly rolesUserRepository: Repository<RolesUser>,
    ) {}

    async findAll(query?: any): Promise<RolesUser[]> {
        const queryBuilder = this.rolesUserRepository.createQueryBuilder('user');

        if (query?.search) {
            queryBuilder.where(
                'roles_user.roleId LIKE :search OR roles_user.userId LIKE :search',
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

    async findById(id: number): Promise<RolesUser | null> {
        return this.rolesUserRepository.findOneById(id);
    }

    async findByRoleUserById(userId: string): Promise<RolesUser | null> {
        return this.rolesUserRepository.findOne({ where: { userId } });
    }

    async findByRoleId(roleId: string): Promise<RolesUser | null> {
        return this.rolesUserRepository.findOne({ where: { roleId } });
    }

    async update(user: RolesUser, updateData: any): Promise<RolesUser> {
        Object.assign(user, updateData);
        return this.rolesUserRepository.save(user);
    }

    async delete(user: RolesUser): Promise<void> {
        await this.rolesUserRepository.remove(user);
    }

    async count(query?: any): Promise<number> {
        const queryBuilder = this.rolesUserRepository.createQueryBuilder('user');

        if (query?.search) {
            queryBuilder.where(
                'roles_user.roleId LIKE :search OR roles_user.userId LIKE :search',
                { search: `%${query.search}%` }
            );
        }

        return queryBuilder.getCount();
    }
}