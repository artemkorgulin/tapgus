import { Rounds } from '../../entities/rounds.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';
export class AddRounds1669834539569 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.insert(Rounds, [
            {
                round_active: "Y",
                round_name: 'tester',
                round_user: '78ef6934-dd2c-445f-a1d5-a42ee2f106b7',
                round_begin_time: '14.10.2025 14:00',
                round_end_time: '14.10.2025 14:30',
                round_status : 'Y'
            },
            {
                round_active: "Y",
                round_name: 'masu',
                round_user: '78ef6934-dd2c-445f-a1d5-a42ee2f106b7',
                round_begin_time: '14.11.2025 14:00',
                round_end_time: '14.11.2025 14:30',
                round_status : 'Y'
            },
            {
                round_active: "Y",
                round_name: 'mars',
                round_user: '8e5bdb8b-7654-4aaf-b8e0-676c11c44fc4',
                round_begin_time: '10.11.2025 14:00',
                round_end_time: '10.11.2025 14:30',
                round_status : 'Y'
            }
        ]);
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.clear(Rounds);
    }
}