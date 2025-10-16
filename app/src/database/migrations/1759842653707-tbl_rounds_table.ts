import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class TblRoundsTable1759842653707 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'rounds',
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
                        name: 'round_active',
                        type: 'varchar'
                    },
                    {
                        name: 'round_name',
                        type: 'varchar'
                    },
                    {
                        name: 'round_user',
                        type: 'varchar'
                    },
                    {
                        name: 'round_begin_time',
                        type: 'varchar'
                    },
                    {
                        name: 'round_end_time',
                        type: 'varchar'
                    },
                    {
                        name: 'round_status',
                        type: 'varchar'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('rounds');
    }

}
