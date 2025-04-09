import { IsString, Length, Matches } from 'class-validator';

export class StudentLoginDto {
  @IsString()
  @Matches(/^(5)[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/, {
    message: 'Geçerli bir telefon numarası giriniz (5xx xxx xx xx formatında)',
  })
  phoneNumber!: string;

  @IsString()
  @Length(11, 11, { message: 'TC kimlik numarası 11 haneli olmalıdır' })
  @Matches(/^[0-9]+$/, {
    message: 'TC kimlik numarası sadece rakamlardan oluşmalıdır',
  })
  password!: string; // İlk girişte TC kimlik no kullanılacak
}
