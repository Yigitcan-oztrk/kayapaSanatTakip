import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { AdminCreateStudentDto } from '../users/dto/admin-create-student.dto';
import { StudentLoginDto } from '../users/dto/student-login.dto';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async registerStudent(
    adminCreateStudentDto: AdminCreateStudentDto,
  ): Promise<Omit<User, 'password'>> {
    const { tc, phoneNumber } = adminCreateStudentDto;

    const existingUser = await this.prisma.user.findFirst({
      where: {
        OR: [{ tc }, { phoneNumber }],
      },
    });

    if (existingUser) {
      throw new ConflictException(
        'Bu TC kimlik numarası veya telefon numarası ile kayıtlı bir kullanıcı bulunmaktadır',
      );
    }

    const hashedPassword = await bcrypt.hash(tc, 10);

    const student = await this.prisma.user.create({
      data: {
        ...adminCreateStudentDto,
        password: hashedPassword,
        role: 'STUDENT',
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        tc: true,
        phoneNumber: true,
        role: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return student;
  }

  async loginStudent(
    studentLoginDto: StudentLoginDto,
  ): Promise<{ access_token: string; user: Omit<User, 'password'> }> {
    const { phoneNumber, password } = studentLoginDto;

    const user = await this.prisma.user.findUnique({
      where: { phoneNumber },
    });

    if (!user) {
      throw new UnauthorizedException('Geçersiz telefon numarası veya şifre');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Geçersiz telefon numarası veya şifre');
    }

    if (user.status !== 'ACTIVE') {
      throw new UnauthorizedException('Hesabınız aktif değil');
    }

    const payload = {
      sub: user.id,
      phoneNumber: user.phoneNumber,
      role: user.role,
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userWithoutPassword } = user;

    return {
      access_token: await this.jwtService.signAsync(payload),
      user: userWithoutPassword,
    };
  }
}
