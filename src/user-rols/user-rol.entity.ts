import { Entity, CreateDateColumn, PrimaryGeneratedColumn, ManyToOne, Column, Unique } from "typeorm";
import { User } from "../users/user.entity";
import { Rol } from "../rols/rol.entity";

@Entity({ name: 'users_rols' })
@Unique(['userId', 'rolId'])
export class UserRol {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @Column()
    userId: number;

    @ManyToOne(type => User, user => user.userRoles, { nullable: false })
    user: User;

    @Column()
    rolId: number;

    @ManyToOne(type => Rol, rol => rol.userRoles, { nullable: false })
    rol: Rol;
}