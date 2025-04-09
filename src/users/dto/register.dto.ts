import { IsString, Length, Matches } from 'class-validator';

export class RegisterDto {
  @IsString()
  @Length(11, 11, { message: 'TC kimlik numarası 11 haneli olmalıdır' })
  @Matches(/^[0-9]+$/, {
    message: 'TC kimlik numarası sadece rakamlardan oluşmalıdır',
  })
  tc!: string;

  @IsString()
  @Matches(/^(5)[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/, {
    message: 'Geçerli bir telefon numarası giriniz (5xx xxx xx xx formatında)',
  })
  phoneNumber!: string;

  @IsString()
  @Length(6, 20, { message: 'Şifre 6-20 karakter arasında olmalıdır' })
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
    {
      message:
        'Şifre en az bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermelidir',
    },
  )
  password!: string;
}
