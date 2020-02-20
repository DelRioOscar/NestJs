
import { IsEmail, IsNotEmpty } from 'class-validator'

export class loginDto {

    @IsEmail({}, {message: 'El email es Incorrecto'})
    email: string;

    @IsNotEmpty({message: 'La contraseña no debe estar en vacío.'})
    password: string;
}