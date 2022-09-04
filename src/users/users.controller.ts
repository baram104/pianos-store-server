import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Session,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    //get user details
  }

  @Post('login')
  login(@Body() userDetails: any, @Session() session: Record<string, any>) {
    console.log(userDetails);
    session.user = userDetails;
    //validate user details
    //create session
    //redirect to home page
  }

  @Post('register')
  register(@Body() userRegDetails: any) {
    //validate the data
    //add user to the system and redirect them to home page
  }
}
