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
}