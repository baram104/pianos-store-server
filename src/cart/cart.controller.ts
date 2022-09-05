import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AddProductDto } from './add-product-dto';
import { AuthGuard } from '../guards/auth.guard';

@Controller('cart')
@UseGuards(AuthGuard)
export class CartController {
  @Get()
  getCartById() {
    //get Cart by id
  }

  @Post()
  addProduct(@Body(new ValidationPipe()) productData: AddProductDto) {
    //create MW for validating the data
    //add cart
  }

  @Put(':prodId')
  updateCart(
    @Body('quantity', ParseIntPipe) quantity: number,
    @Param('prodId', ParseIntPipe) prodId: number,
  ) {
    //create MW for validating the data
    //update cart
  }

  @Delete(':prodId')
  deleteCart(@Param('prodId', ParseIntPipe) prodId: number) {
    //delete cart
  }
}
