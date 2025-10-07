import {BaseEntity, PrimaryGeneratedColumn, Entity, Column, Unique, OneToMany} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
@Unique(['email'])
export class Rounds extends BaseEntity {
    constructor() {
        super();
        this.initialize();
    }

    initialize() {
        this.id = "";
        this.round_name = "";
        this.round_time = "";
        this.round_user = "";
    }

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    round_name: string;

    @Column()
    round_time: string;

    @Column()
    round_user: string;

    async validatePassword(password: string): Promise<boolean> {
        const hash = await bcrypt.hash(password, this.salt);
        return hash === this.password;
    }
}