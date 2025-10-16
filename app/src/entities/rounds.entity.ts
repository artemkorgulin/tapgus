import {BaseEntity, PrimaryGeneratedColumn, Entity, Column, Unique, OneToMany} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
@Unique(['round_user'])
export class Rounds extends BaseEntity {
    constructor() {
        super();
        this.initialize();
    }

    initialize() {
        this.id = "";
        this.round_active = "";
        this.round_name = "";
        this.round_user = "";
        this.round_begin_time = "";
        this.round_end_time = "";
        this.round_status = "";
    }

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    round_active: string;

    @Column()
    round_name: string;

    @Column()
    round_user: string;

    @Column()
    round_begin_time: string;

    @Column()
    round_end_time: string;

    @Column()
    round_status: string;


}