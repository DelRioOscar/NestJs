import { IsNumber } from 'class-validator';

export class UserRolDto {

    @IsNumber()
    userId: number;

    @IsNumber()
    rolId: number;
}