import {BaseEntity, PrimaryGeneratedColumn, Entity, Column, Unique, OneToMany} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
@Unique(['points_user'])
export class PointsUser extends BaseEntity {
    constructor() {
        super();
        this.initialize();
    }

    initialize() {
        this.id = "";
        this.points_user = "";
        this.points = "";
        this.roundId = "";
    }

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    points_user: string;

    @Column()
    points: string;

    @Column()
    roundId: string;
}