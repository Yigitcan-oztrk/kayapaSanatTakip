import { IsString, Length, Matches } from 'class-validator';

export class AdminCreateStudentDto {
  @IsString()
  @Length(2, 50, { message: 'İsim 2-50 karakter arasında olmalıdır' })
  @Matches(/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]*$/, {
    message: 'İsim sadece harflerden oluşmalıdır',
  })
  firstName!: string;

  @IsString()
  @Length(2, 50, { message: 'Soyisim 2-50 karakter arasında olmalıdır' })
  @Matches(/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]*$/, {
    message: 'Soyisim sadece harflerden oluşmalıdır',
  })
  lastName!: string;

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
}
