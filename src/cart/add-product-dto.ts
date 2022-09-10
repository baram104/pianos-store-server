import { IsNotEmpty, IsNumber } from 'class-validator';

export class AddProductDto {
  @IsNotEmpty()
  @IsNumber()
  prodId: number;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}
