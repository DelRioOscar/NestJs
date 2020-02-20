import { IsIn } from 'class-validator';

export class RolDto {
    
    @IsIn(['Administrador', 'Usuario'])
    name: string;
}