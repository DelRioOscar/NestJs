import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "../users/user.entity";

@Entity({ name: 'rols' })
export class Rol {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 13 })
    name: number;

    @ManyToOne(type => User, user => user.phones, { nullable: false })
    user: User;
}