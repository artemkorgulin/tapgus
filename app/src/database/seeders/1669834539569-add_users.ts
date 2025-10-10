import { User } from '../../entities/user.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';
export class AddUsers1669834539569 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.insert(User, [
            {
                login: 'tester',
                username: 'tester',
                email: 'tester@tester.ru',
                password: 'tester@tester.ru',
                salt: ''
            },
            {
                login: 'artem',
                username: 'artem',
                email: 'artem@artem.ru',
                password: 'artem@artem.ru',
                salt: ''
            },
            {
                login: 'developer',
                username: 'developer',
                email: 'developer@developer.ru',
                password: 'developer@developer.ru',
                salt: ''
            }
        ]);
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.clear(User);
    }
}