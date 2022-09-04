import {
  Equals,
  IsAlpha,
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  Matches,
  MaxLength,
} from 'class-validator';

export class RegisterationDetailsDto {
  @IsNotEmpty()
  @MaxLength(30)
  @IsAlphanumeric()
  username: string;

  @IsNotEmpty()
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsAlpha()
  @MaxLength(15)
  firstName: string;

  @IsNotEmpty()
  @IsAlpha()
  @MaxLength(15)
  lastName: string;
}
