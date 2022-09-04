import { IsNotEmpty, IsNumberString } from 'class-validator';

export class AddProductDto {
  @IsNotEmpty()
  @IsNumberString()
  prodId: number;

  @IsNotEmpty()
  @IsNumberString()
  quantity: number;
}
