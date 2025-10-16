import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class TblRolesUserTable1759842286786 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'roles_user',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        default: 'uuid_generate_v4()',
                        generationStrategy: 'uuid',
                        isGenerated: true,
                        isPrimary: true
                    },
                    {
                        name: 'roleId',
                        type: 'varchar'
                    },
                    {
                        name: 'userId',
                        type: 'varchar'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('roles_user');
    }

}
