import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(private rol: string) { }

  canActivate(context: ExecutionContext): any {
    const request = context.switchToHttp().getRequest();
    /* console.log(request.user, this.rol); */
    if (this.rol === 'Administrador')
      throw new UnauthorizedException();
  }
}
