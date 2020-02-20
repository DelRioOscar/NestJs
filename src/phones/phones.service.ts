import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Phone } from './phone.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PhoneDto } from './dtos/phone.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class PhonesService {
    constructor(@InjectRepository(Phone) private phonesRepository: Repository<Phone>, private userService: UsersService) { }

    async create(phoneDto: PhoneDto, userId: number) {
        const user = await this.userService.findOne(userId);
        return this.phonesRepository.save({ number: phoneDto.number, user });
    }

    async findAll(userId: number) {
        const user = await this.userService.findOne(userId);
        return this.phonesRepository.find({ where: { user }});
    }
}
