import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Roles } from '../constants/rol.constant';

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(private rol: Roles) { }

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const { rol } = request.user;

    if (this.rol != rol) throw new UnauthorizedException();
    return true;

  }
}
