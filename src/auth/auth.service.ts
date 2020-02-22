import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'
import { UsersService } from '../users/users.service';
import { loginDto } from './dtos/login.dto';
import { UserDto } from '../users/dtos/user.dto';
import { BadRequestException } from '../exceptions/bad-request.exception';

const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService, private usersService: UsersService) { }

    async validateUser(loginDto: loginDto) {
        const user = await this.usersService.findByEmail(loginDto.email);
        if (user && bcrypt.compareSync(loginDto.password, user.password)) {
            const roles = user.userRoles.map((userRol) => { return { rol: userRol.rol.name } });
            const payload = { id: user.id, lastname: user.lastname, email: user.email, roles };
            return {
                access_token: this.jwtService.sign(payload)
            };
        }
        throw new BadRequestException();
    }

    signIn(userDto: UserDto) {
        return this.usersService.create(userDto);
    }
}
