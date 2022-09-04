import { IsNotEmpty } from 'class-validator';
export class LoginDetailsDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}
