import { RolesUser } from '../../entities/roles.user.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';
export class AddUserRoles1669834539569 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.insert(RolesUser, [
            {
                roleId: '78ef6934-dd2c-490f-a1d5-a42ee2f106b7',
                userId: '7fe0f104-77e6-448a-aa3a-eebed80e81ef'
            },
            {
                roleId: '78ef6934-dd2c-590f-a1d5-a42ee2f106b7',
                userId: '78ef6934-dd2c-445f-a1d5-a42ee2f106b7'
            }
        ]);
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.clear(RolesUser);
    }
}