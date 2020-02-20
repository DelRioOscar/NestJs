import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PhonesModule } from './phones/phones.module';
import { RolsModule } from './rols/rols.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, AuthModule, PhonesModule, RolsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
