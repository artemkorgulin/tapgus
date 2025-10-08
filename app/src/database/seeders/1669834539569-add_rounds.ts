import { Rounds } from '../../entityes/rounds.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';
export class AddRounds1669834539569 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.insert(Rounds, [
            {
                round_name: 'tester',
                round_time: 'tester@tester.ru',
                round_user: '1',
            }
        ]);
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.clear(Rounds);
    }
}