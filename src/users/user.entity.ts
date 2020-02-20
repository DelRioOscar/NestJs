import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, OneToMany } from 'typeorm'
import { Exclude } from 'class-transformer'

import { Phone } from '../phones/phone.entity';
import { Rol } from '../rols/rol.entity';


const bcrypt = require('bcrypt');

@Entity({ name: 'users' })
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 30 })
    name: string;

    @Column({ type: 'varchar', length: 30 })
    lastname: string;

    @Column()
    email: string;

    @BeforeInsert()
    updatePassword() {
        this.password = bcrypt.hashSync(this.password, 10);
    }

    @Exclude()
    @Column()
    password: string;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(type => Phone, phone => phone.user)
    phones: Phone[];


    @OneToMany(type => Rol, rol => rol.user)
    rols: Rol[];
}