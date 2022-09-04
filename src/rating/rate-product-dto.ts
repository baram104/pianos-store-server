import { IsNotEmpty, IsNumberString, Max } from 'class-validator';

export class RateProductDto {
  @IsNotEmpty()
  @IsNumberString()
  prodId: number;

  @IsNotEmpty()
  @IsNumberString()
  rate: number;
}
