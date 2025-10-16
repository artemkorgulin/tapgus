import {BaseEntity, PrimaryGeneratedColumn, Entity, Column, Unique, OneToMany} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
@Unique(['role_name'])
export class Roles extends BaseEntity {
    constructor() {
        super();
        this.initialize();
    }

    initialize() {
        this.id = "";
        this.role_name = "";
    }

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    role_name: string;
}