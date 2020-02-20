import { Module } from '@nestjs/common';
import { UserRolsController } from './user-rols.controller';
import { UserRolsService } from './user-rols.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRol } from './user-rol.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserRol])],
  controllers: [UserRolsController],
  providers: [UserRolsService]
})
export class UserRolsModule {}
