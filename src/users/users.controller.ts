import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { UserDto } from './dtos/user.dto';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../guards/roles.guard';

@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.usersService.findOne(id);
    }

    @UseGuards(new RolesGuard('Usuario'))
    @Post()
    create(@Body() user: UserDto) {
        return this.usersService.create(user);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() user: UserDto) {
        return this.usersService.update(id, user);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.usersService.remove(id);
    }
}
