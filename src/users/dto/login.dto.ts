import { IsString, Length, Matches } from 'class-validator';

export class LoginDto {
  @IsString()
  @Length(11, 11, { message: 'TC kimlik numarası 11 haneli olmalıdır' })
  @Matches(/^[0-9]+$/, {
    message: 'TC kimlik numarası sadece rakamlardan oluşmalıdır',
  })
  tc!: string;

  @IsString()
  @Length(6, 20, { message: 'Şifre 6-20 karakter arasında olmalıdır' })
  password!: string;
}
