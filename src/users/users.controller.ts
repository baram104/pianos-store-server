import {
  Body,
  Controller,
  Get,
  Post,
  Session,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';
import { LoginDetailsDto } from './login-details-dto';
import { RegisterationDetailsDto } from './registeration-details-dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('profile')
  @UseGuards(AuthGuard)
  getUser(@Session() session: Record<string, any>) {
    return this.usersService.getUser(session);
  }

  @Post('login')
  async login(
    @Body(new ValidationPipe()) userDetails: LoginDetailsDto,
    @Session() session: Record<string, any>,
  ) {
    const res = await this.usersService.login(userDetails);
    if (res) {
      session.user = res;
      return { logged: true, username: res.username };
    }
    return { logged: false };
  }

  @Post('register')
  async register(
    @Body(new ValidationPipe()) userRegDetails: RegisterationDetailsDto,
    @Session() session: Record<string, any>,
  ) {
    return await this.usersService.register(userRegDetails, session);
  }
}
