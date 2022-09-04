import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { AddProductDto } from './add-product-dto';

@Controller('cart')
export class CartController {
  //guard
  @Get()
  getCartById() {
    //get Cart by id
  }

  @Post()
  addProduct(@Body(new ValidationPipe()) productData: AddProductDto) {
    //create MW for validating the data
    //add cart
  }

  @Put()
  updateCart(@Body('quantity', ParseIntPipe) quantity: number) {
    //create MW for validating the data
    //update cart
  }

  @Delete(':prodId')
  deleteCart(@Param('prodId', ParseIntPipe) prodId: number) {
    //delete cart
  }
}
