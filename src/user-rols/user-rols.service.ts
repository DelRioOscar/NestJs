import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserRol } from './user-rol.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRolDto } from './dtos/user-rol.entity';

@Injectable()
export class UserRolsService {

    constructor(@InjectRepository(UserRol) private userRolsRepository: Repository<UserRol>) { }

    findAll() {
        return this.userRolsRepository.find({ relations: ['user', 'rol'] });
    }

    async create(userRolDto: UserRolDto) {
        return await this.userRolsRepository.save(userRolDto);
    }
}
