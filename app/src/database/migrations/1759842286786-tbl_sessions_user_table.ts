import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class TblSessionsUserTable1759842286786 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'sessions_user',
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
                        name: 'sessid',
                        type: 'varchar'
                    },
                    {
                        name: 'user',
                        type: 'varchar'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('sessions_user');
    }

}
