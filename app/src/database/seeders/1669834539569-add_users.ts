import { User } from '../../entityes/user.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';
export class AddUsers1669834539569 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.insert(User, [
            {
                username: 'tester',
                email: 'tester@tester.ru',
                password: 'tester@tester.ru',
                salt: ''
            }
        ]);
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.clear(User);
    }
}