import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Session,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';
import { LoginDetailsDto } from './login-details-dto';
import { RegisterationDetailsDto } from './registeration-details-dto';
import { AddressDetailsDto } from './update-address.dto';
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
      return { logged: true, username: res.username, firstName: res.firstName };
    }
    return { logged: false };
  }

  @Post('register')
  async register(
    @Body(new ValidationPipe()) userRegDetails: RegisterationDetailsDto,
    @Session() session: Record<string, any>,
  ) {
    const user = await this.usersService.register(userRegDetails, session);
    return { username: user.username, firstName: user.firstName };
  }

  @Patch()
  async updateAddress(
    @Body(new ValidationPipe()) addressDetails: AddressDetailsDto,
    @Session() session: Record<string, any>,
  ) {
    await this.usersService.updateAddress(addressDetails, session);
  }
}
