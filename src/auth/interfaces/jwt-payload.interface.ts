import { Role } from '@prisma/client';

export interface JwtPayload {
  sub: number;
  phoneNumber: string;
  role: Role;
}
