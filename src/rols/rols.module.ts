import { Module } from '@nestjs/common';
import { RolsService } from './rols.service';
import { RolsController } from './rols.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rol } from './rol.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rol])],
  providers: [RolsService],
  controllers: [RolsController]
})
export class RolsModule { }
