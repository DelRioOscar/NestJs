import { Controller, Post, Body } from '@nestjs/common';
import { RolsService } from './rols.service';
import { RolDto } from './dtos/rol.dto';

@Controller('rols')
export class RolsController {

    constructor(private rolsService: RolsService) { }

    @Post()
    async create(@Body() rolDto: RolDto) {
        return this.rolsService.create(rolDto);
    }
}
