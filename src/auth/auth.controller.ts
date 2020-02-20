import { Controller, Post, Body, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { loginDto } from './dtos/login.dto';
import { AuthService } from './auth.service';
import { UserDto } from '../users/dtos/user.dto';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('login')
    logIn(@Body() loginDto: loginDto) {
        return this.authService.validateUser(loginDto);
    }

    @Post('signin')
    signIn(@Body() userDto: UserDto) {
        return this.authService.signIn(userDto);
    }
}
