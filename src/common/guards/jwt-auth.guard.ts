import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest<TUser extends User>(err: any, user: TUser): TUser {
    if (err || !user) {
      throw new UnauthorizedException('Lütfen giriş yapın');
    }
    return user;
  }
} 