import { IsDate, IsNotEmpty, IsNumberString } from 'class-validator';

export class OrderDto {
  @IsNotEmpty()
  @IsDate()
  date: Date;

  @IsNumberString()
  @IsNotEmpty()
  userId: number;
}
