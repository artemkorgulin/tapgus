import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class TblPointsTable1759842286786 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'points',
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
                        name: 'points_user',
                        type: 'varchar'
                    },
                    {
                        name: 'points',
                        type: 'varchar'
                    },
                    {
                        name: 'roundId',
                        type: 'varchar'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('points');
    }

}
