import { Injectable, Session } from '@nestjs/common';
import { LoginDetailsDto } from './login-details-dto';
import { RegisterationDetailsDto } from './registeration-details-dto';

@Injectable()
export class UsersService {
  getUser(@Session() session: Record<string, any>) {
    const userId = session.user.id;
  }

  login(loginDetails: LoginDetailsDto) {}

  register(regDetails: RegisterationDetailsDto) {}
}
