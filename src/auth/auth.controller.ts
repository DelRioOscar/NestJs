import { Controller, Post, Body, UseInterceptors, ClassSerializerInterceptor, UsePipes } from '@nestjs/common';
import { loginDto } from './dtos/login.dto';
import { AuthService } from './auth.service';
import { UserDto } from '../users/dtos/user.dto';
import { JoiValidationPipe } from '../pipes/joi-validation.pipe';
import { loginSchema } from './schemas/login.schema';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('login')
    //@UsePipes(new JoiValidationPipe(loginSchema))
    logIn(@Body() loginDto: loginDto) {
        return this.authService.validateUser(loginDto);
    }

    @Post('signin')
    signIn(@Body() userDto: UserDto) {
        return this.authService.signIn(userDto);
    }
}
