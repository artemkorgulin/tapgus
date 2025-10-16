import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class TblUserTable1759842286786 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
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
                        name: 'username',
                        type: 'varchar'
                    },
                    {
                        name: 'login',
                        type: 'varchar'
                    },
                    {
                        name: 'email',
                        type: 'varchar'
                    },
                    {
                        name: 'password',
                        type: 'varchar'
                    },
                    {
                        name: 'salt',
                        type: 'varchar'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
