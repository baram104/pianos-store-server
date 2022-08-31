import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';

@Controller('cart')
export class CartController {
  //guard
  @Get(':id')
  getCartById(@Param('id', ParseIntPipe) id: number) {
    //get Cart by id
  }

  @Post()
  createCart(@Body() cart: any) {
    //create MW for validating the data
    //add cart
  }

  @Put(':id')
  updateCart(@Param('id', ParseIntPipe) id: number) {
    //create MW for validating the data
    //update cart
  }

  @Delete(':id')
  deleteCart(@Param('id', ParseIntPipe) id: number) {
    //delete cart
  }
}
