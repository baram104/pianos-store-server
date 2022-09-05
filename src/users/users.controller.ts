import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Session,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';
import { LoginDetailsDto } from './login-details-dto';
import { RegisterationDetailsDto } from './registeration-details-dto';

@Controller('users')
export class UsersController {
  @Get('profile')
  @UseGuards(AuthGuard)
  getUser() {
    //get user details
  }

  @Post('login')
  login(
    @Body(new ValidationPipe()) userDetails: LoginDetailsDto,
    @Session() session: Record<string, any>,
  ) {
    session.user = userDetails;
    //validate user details against db
    //create session
    //redirect to home page
  }

  @Post('register')
  register(
    @Body(new ValidationPipe()) userRegDetails: RegisterationDetailsDto,
  ) {
    //validate the data
    //add user to the system and redirect them to home page
  }
}
