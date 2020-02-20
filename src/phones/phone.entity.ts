import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "../users/user.entity";

@Entity({name: 'phones'})
export class Phone {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    number: string;

    @ManyToOne(type => User, user => user.phones, {nullable: false})
    user: User;

}