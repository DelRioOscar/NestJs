import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './dtos/user.dto';


@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }

    async findAll() {
        return await this.usersRepository.find({
            relations: ['userRoles']
        }
        );
    }

    async findOne(id: number) {
        return await this.usersRepository.findOne(id);
    }

    async create(user: UserDto) {
        return await this.usersRepository.save(this.usersRepository.create({ ...user }));
    }

    async update(id: number, user: UserDto) {
        const userRequest = await this.usersRepository.findOne(id);
        userRequest.name = user.name;
        userRequest.lastname = user.lastname;
        userRequest.email = user.email;
        userRequest.password = user.password;
        return await this.usersRepository.save(userRequest);
    }

    async remove(id: number) {
        const userRequest = await this.usersRepository.findOne(id);
        return await this.usersRepository.remove(userRequest);
    }

    async findByEmail(email: string) {
        return await this.usersRepository.findOne({ email }, {
            join: {
                alias: 'y',
                innerJoinAndSelect: {
                    userRoles: 'y.userRoles',
                    rol: 'userRoles.rol'
                }
            }
        });
    }
}
