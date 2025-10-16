import {BaseEntity, PrimaryGeneratedColumn, Entity, Column, Unique, OneToMany} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
@Unique(['sessid'])
export class SessionsUser extends BaseEntity {
    constructor() {
        super();
        this.initialize();
    }

    initialize() {
        this.id = "";
        this.sessid = "";
        this.user = "";
    }

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    sessid: string;

    @Column()
    user: string;
}