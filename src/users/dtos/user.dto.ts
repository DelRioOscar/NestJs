
import { IsEmail, IsNotEmpty } from 'class-validator'

export class UserDto {

    @IsNotEmpty()
    public name: string;

    @IsNotEmpty()
    public lastname: string;

    @IsEmail()
    public email: string;

    @IsNotEmpty()
    public password: string;
}