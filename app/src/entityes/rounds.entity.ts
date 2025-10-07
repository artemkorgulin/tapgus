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
        this.username = "";
        this.email = "";
        this.password = "";
        this.salt = "";
    }

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    async validatePassword(password: string): Promise<boolean> {
        const hash = await bcrypt.hash(password, this.salt);
        return hash === this.password;
    }
}