import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Rol } from './rol.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { RolDto } from './dtos/rol.dto';

@Injectable()
export class RolsService {
    constructor(@InjectRepository(Rol) private rolsRepository: Repository<RolDto>) { }

    async create(rolDto: RolDto) {
        return await this.rolsRepository.save(rolDto);
    }
}
