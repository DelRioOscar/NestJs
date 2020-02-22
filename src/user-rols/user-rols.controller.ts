import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserRolsService } from './user-rols.service';
import { UserRolDto } from './dtos/user-rol.entity';

@Controller('userrols')
export class UserRolsController {

    constructor(private userRolService: UserRolsService) { }

    @Get()
    findAll() {
        return this.userRolService.findAll();
    }

    @Post()
    create(@Body() userRolDto: UserRolDto) {
        return this.userRolService.create(userRolDto);
    }

}
