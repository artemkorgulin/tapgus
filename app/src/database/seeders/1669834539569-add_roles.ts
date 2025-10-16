import { Roles } from '../../entities/roles.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';
export class AddRoles1669834539569 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.insert(Roles, [
            {
                id: '78ef6934-dd2c-490f-a1d5-a42ee2f106b7',
                role_name: 'Admin'
            },
            {
                id: '78ef6934-dd2c-590f-a1d5-a42ee2f106b7',
                role_name: 'gamer'
            }
        ]);
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.clear(Roles);
    }
}