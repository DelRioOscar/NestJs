import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Unique } from "typeorm";
import { UserRol } from "../user-rols/user-rol.entity";

@Entity({ name: 'rols' })
@Unique(['name'])
export class Rol {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 13 })
    name: string;

    @OneToMany(type => UserRol, userRol => userRol.rol)
    userRoles: UserRol[];
}