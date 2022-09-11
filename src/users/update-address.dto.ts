import {
  Equals,
  IsAlpha,
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AddressDetailsDto {
  @IsNotEmpty()
  @MinLength(3)
  @IsAlpha()
  city: string;

  @IsNotEmpty()
  @MinLength(3)
  street: string;

  @IsNotEmpty()
  @MinLength(7)
  @IsNumberString()
  zipcode: string;
}
