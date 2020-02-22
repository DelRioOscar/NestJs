import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Roles } from '../constants/rol.constant';

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(private rol: Roles) { }

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    let roles: string[] = [];
    request.user.roles.forEach(r => roles.push(r.rol));
    if (!roles.includes(this.rol)) throw new UnauthorizedException();
    return true;

  }
}
