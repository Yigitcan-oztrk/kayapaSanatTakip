import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdminCreateStudentDto } from '../users/dto/admin-create-student.dto';
import { StudentLoginDto } from '../users/dto/student-login.dto';
import { Roles } from '../common/decorators/roles.decorator';
import { Role, User } from '@prisma/client';
import { RolesGuard } from '../common/guards/roles.guard';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register/student')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  async registerStudent(
    @Body() adminCreateStudentDto: AdminCreateStudentDto,
  ): Promise<Omit<User, 'password'>> {
    return await this.authService.registerStudent(adminCreateStudentDto);
  }

  @Post('login/student')
  @HttpCode(HttpStatus.OK)
  async loginStudent(
    @Body() studentLoginDto: StudentLoginDto,
  ): Promise<{ access_token: string; user: Omit<User, 'password'> }> {
    return await this.authService.loginStudent(studentLoginDto);
  }
}
